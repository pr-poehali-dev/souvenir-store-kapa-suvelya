import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function PopularProductsSection() {
  const products = [
    {
      id: 1,
      name: 'Кружка из капа',
      price: '3 500 ₽',
      image: 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/ed9e1c46-b440-4acf-b0e7-bcbf147d5f95.jpg',
    },
    {
      id: 2,
      name: 'Чаша из сувеля',
      price: '5 200 ₽',
      image: 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/7b971dbb-1606-4192-81a8-7d1c5f6e5452.jpg',
    },
    {
      id: 3,
      name: 'Шкатулка из капа',
      price: '4 800 ₽',
      image: 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/ed9e1c46-b440-4acf-b0e7-bcbf147d5f95.jpg',
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Популярные товары
          </h2>
          <p className="text-lg text-muted-foreground">
            Изделия, которые выбирают чаще всего
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-primary mb-4">{product.price}</p>
                <Button className="w-full" asChild>
                  <Link to="/catalog">Смотреть подробнее</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link to="/catalog">Посмотреть весь каталог</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
