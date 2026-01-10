import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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

export default function Catalog() {
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Каталог товаров</h1>

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
                  className="overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
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
                      <Button size="sm">Заказать</Button>
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
    </div>
  );
}
