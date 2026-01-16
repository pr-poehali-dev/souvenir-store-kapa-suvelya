import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Cart, { CartItem } from '@/components/Cart';

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  material: string;
  image_url: string;
  images: string[];
  in_stock: boolean;
}

export default function Catalog() {
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const url = new URL('https://functions.poehali.dev/21ca6865-cf59-41ac-a124-6bb6cb259292');
      if (category !== 'all') {
        url.searchParams.set('category', category);
      }
      
      const response = await fetch(url.toString());
      if (!response.ok) throw new Error('Ошибка загрузки товаров');
      
      const data = await response.json();
      setProducts(data.products || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка загрузки');
    } finally {
      setLoading(false);
    }
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, image_url: product.images?.[0] || product.image_url, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">Каталог товаров</h1>
          <Cart
            items={cartItems}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
            onClear={clearCart}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Категория" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все товары</SelectItem>
              <SelectItem value="cups">Кружки</SelectItem>
              <SelectItem value="bowls">Чаши</SelectItem>
              <SelectItem value="boxes">Шкатулки</SelectItem>
              <SelectItem value="accessories">Аксессуары</SelectItem>
              <SelectItem value="decor">Декор</SelectItem>
              <SelectItem value="kitchen">Кухня</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Сортировка" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Популярные</SelectItem>
              <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
              <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {loading && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">Загрузка товаров...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-lg text-destructive">Ошибка: {error}</p>
            <Button onClick={fetchProducts} className="mt-4">
              Попробовать снова
            </Button>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sortedProducts.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => {
                    setSelectedProduct(product);
                    setCurrentImageIndex(0);
                  }}
                >
                  <div className="aspect-square overflow-hidden bg-muted relative">
                    <img
                      src={product.images?.[0] || product.image_url}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {product.images && product.images.length > 1 && (
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        +{product.images.length - 1}
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {product.material}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">
                        {product.price.toLocaleString('ru-RU')} ₽
                      </span>
                      <Button size="sm" onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}>
                        <Icon name="ShoppingCart" size={16} className="mr-1" />
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  Товары не найдены. Попробуйте изменить фильтры.
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Модальное окно галереи */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedProduct?.name}</DialogTitle>
          </DialogHeader>
          {selectedProduct && (
            <div className="space-y-4">
              {/* Основное изображение */}
              <div className="relative w-full h-64 md:h-80 bg-muted rounded-lg overflow-hidden">
                <img
                  src={selectedProduct.images?.[currentImageIndex] || selectedProduct.image_url}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain"
                />
                
                {/* Навигация между фото */}
                {selectedProduct.images && selectedProduct.images.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute left-2 top-1/2 -translate-y-1/2"
                      onClick={() => setCurrentImageIndex((prev) => 
                        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
                      )}
                    >
                      <Icon name="ChevronLeft" size={24} />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2"
                      onClick={() => setCurrentImageIndex((prev) => 
                        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
                      )}
                    >
                      <Icon name="ChevronRight" size={24} />
                    </Button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white text-sm px-3 py-1 rounded">
                      {currentImageIndex + 1} / {selectedProduct.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Миниатюры */}
              {selectedProduct.images && selectedProduct.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {selectedProduct.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`flex-shrink-0 w-20 h-20 rounded border-2 overflow-hidden ${
                        currentImageIndex === idx ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt={`Фото ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Описание товара */}
              <div className="space-y-2">
                <p className="text-muted-foreground">{selectedProduct.description}</p>
                <p className="text-sm"><strong>Материал:</strong> {selectedProduct.material}</p>
                <p className="text-sm"><strong>Категория:</strong> {selectedProduct.category}</p>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-3xl font-bold text-primary">
                    {selectedProduct.price.toLocaleString('ru-RU')} ₽
                  </span>
                  <Button size="lg" onClick={() => addToCart(selectedProduct)}>
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    В корзину
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}