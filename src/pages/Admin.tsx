import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  material: string;
  image_url: string;
  in_stock: boolean;
}

const API_URL = 'https://functions.poehali.dev/8ff45b75-cb46-41b6-abb0-37ffd148f760';

export default function Admin() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'cups',
    price: 0,
    material: '',
    image_url: '',
    in_stock: true,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data.products || []);
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось загрузить товары',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const method = editingProduct ? 'PUT' : 'POST';
      const body = editingProduct 
        ? { ...formData, id: editingProduct.id }
        : formData;

      const response = await fetch(API_URL, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!response.ok) throw new Error('Ошибка сохранения');

      toast({
        title: 'Успешно',
        description: editingProduct ? 'Товар обновлён' : 'Товар добавлен',
      });

      setIsDialogOpen(false);
      resetForm();
      fetchProducts();
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось сохранить товар',
        variant: 'destructive',
      });
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Удалить товар?')) return;

    try {
      const response = await fetch(`${API_URL}?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Ошибка удаления');

      toast({
        title: 'Успешно',
        description: 'Товар удалён',
      });

      fetchProducts();
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось удалить товар',
        variant: 'destructive',
      });
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      category: product.category,
      price: product.price,
      material: product.material,
      image_url: product.image_url,
      in_stock: product.in_stock,
    });
    setIsDialogOpen(true);
  };

  const resetForm = () => {
    setEditingProduct(null);
    setFormData({
      name: '',
      description: '',
      category: 'cups',
      price: 0,
      material: '',
      image_url: '',
      in_stock: true,
    });
  };

  const handleDialogClose = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) resetForm();
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast({
        title: 'Ошибка',
        description: 'Выберите файл изображения',
        variant: 'destructive',
      });
      return;
    }

    setUploadingImage(true);

    try {
      // Сжимаем изображение до максимум 800px
      const compressedBase64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
            let width = img.width;
            let height = img.height;
            
            // Ограничиваем максимальный размер
            const maxSize = 800;
            if (width > maxSize || height > maxSize) {
              if (width > height) {
                height = (height / width) * maxSize;
                width = maxSize;
              } else {
                width = (width / height) * maxSize;
                height = maxSize;
              }
            }
            
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx?.drawImage(img, 0, 0, width, height);
            
            // Конвертируем в JPEG с качеством 0.8
            resolve(canvas.toDataURL('image/jpeg', 0.8));
          };
          img.onerror = reject;
          img.src = e.target?.result as string;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
        
      const response = await fetch('https://functions.poehali.dev/626b2c40-69c8-46c4-bea2-756b581221df', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: compressedBase64 }),
      });

      if (!response.ok) throw new Error('Ошибка загрузки');

      const data = await response.json();
      setFormData({ ...formData, image_url: data.url });
      
      toast({
        title: 'Успешно',
        description: 'Изображение загружено',
      });
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось загрузить изображение',
        variant: 'destructive',
      });
    } finally {
      setUploadingImage(false);
    }
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Админ-панель</h1>
          <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
            <DialogTrigger asChild>
              <Button>
                <Icon name="Plus" size={20} className="mr-2" />
                Добавить товар
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingProduct ? 'Редактировать товар' : 'Добавить товар'}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Название *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description">Описание</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Категория *</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cups">Кружки</SelectItem>
                        <SelectItem value="bowls">Чаши</SelectItem>
                        <SelectItem value="boxes">Шкатулки</SelectItem>
                        <SelectItem value="accessories">Аксессуары</SelectItem>
                        <SelectItem value="decor">Декор</SelectItem>
                        <SelectItem value="kitchen">Кухня</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="price">Цена (₽) *</Label>
                    <Input
                      id="price"
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="material">Материал</Label>
                  <Input
                    id="material"
                    value={formData.material}
                    onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="image_url">Изображение товара</Label>
                  <div className="space-y-2">
                    <Input
                      id="image_url"
                      value={formData.image_url}
                      onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                      placeholder="URL изображения"
                    />
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">или</span>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        disabled={uploadingImage}
                        onClick={() => document.getElementById('file-upload')?.click()}
                      >
                        <Icon name={uploadingImage ? 'Loader2' : 'Upload'} size={16} className={`mr-2 ${uploadingImage ? 'animate-spin' : ''}`} />
                        {uploadingImage ? 'Загрузка...' : 'Загрузить с компьютера'}
                      </Button>
                      <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                    </div>
                    {formData.image_url && (
                      <div className="mt-2">
                        <img src={formData.image_url} alt="Preview" className="w-32 h-32 object-cover rounded" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="in_stock"
                    checked={formData.in_stock}
                    onChange={(e) => setFormData({ ...formData, in_stock: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <Label htmlFor="in_stock">В наличии</Label>
                </div>

                <div className="flex gap-2">
                  <Button type="submit" className="flex-1">
                    {editingProduct ? 'Сохранить' : 'Добавить'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleDialogClose(false)}
                  >
                    Отмена
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {loading ? (
          <p>Загрузка...</p>
        ) : (
          <div className="grid gap-4">
            {products.map((product) => (
              <Card key={product.id}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{product.name}</span>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(product)}
                      >
                        <Icon name="Edit" size={16} />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(product.id)}
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      {product.image_url && (
                        <img
                          src={product.image_url}
                          alt={product.name}
                          className="w-full h-32 object-cover rounded"
                        />
                      )}
                    </div>
                    <div className="md:col-span-3 space-y-2">
                      <p className="text-sm text-muted-foreground">{product.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span>
                          <strong>Категория:</strong> {product.category}
                        </span>
                        <span>
                          <strong>Цена:</strong> {product.price} ₽
                        </span>
                        <span>
                          <strong>Материал:</strong> {product.material}
                        </span>
                        <span>
                          <strong>Статус:</strong>{' '}
                          {product.in_stock ? '✅ В наличии' : '❌ Нет в наличии'}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}