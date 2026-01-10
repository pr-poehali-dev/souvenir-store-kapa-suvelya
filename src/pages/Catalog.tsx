import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Catalog() {
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const products = [
    {
      id: 1,
      name: 'Кружка из капа берёзы',
      category: 'cups',
      price: 3500,
      image: 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/ed9e1c46-b440-4acf-b0e7-bcbf147d5f95.jpg',
      material: 'Кап берёзы',
    },
    {
      id: 2,
      name: 'Чаша из сувеля',
      category: 'bowls',
      price: 5200,
      image: 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/7b971dbb-1606-4192-81a8-7d1c5f6e5452.jpg',
      material: 'Сувель берёзы',
    },
    {
      id: 3,
      name: 'Шкатулка малая',
      category: 'boxes',
      price: 4800,
      image: 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/ed9e1c46-b440-4acf-b0e7-bcbf147d5f95.jpg',
      material: 'Кап берёзы',
    },
    {
      id: 4,
      name: 'Кружка из сувеля',
      category: 'cups',
      price: 3800,
      image: 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/ed9e1c46-b440-4acf-b0e7-bcbf147d5f95.jpg',
      material: 'Сувель берёзы',
    },
    {
      id: 5,
      name: 'Чаша большая из капа',
      category: 'bowls',
      price: 6500,
      image: 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/7b971dbb-1606-4192-81a8-7d1c5f6e5452.jpg',
      material: 'Кап берёзы',
    },
    {
      id: 6,
      name: 'Шкатулка большая',
      category: 'boxes',
      price: 7200,
      image: 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/ed9e1c46-b440-4acf-b0e7-bcbf147d5f95.jpg',
      material: 'Сувель берёзы',
    },
  ];

  const filteredProducts =
    category === 'all'
      ? products
      : products.filter((p) => p.category === category);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
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

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
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
      </div>
    </div>
  );
}
