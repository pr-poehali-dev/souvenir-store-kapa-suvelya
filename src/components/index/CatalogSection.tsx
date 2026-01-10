import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

interface CatalogSectionProps {
  products: Product[];
}

export default function CatalogSection({ products }: CatalogSectionProps) {
  const renderProducts = (category?: string) => {
    const filtered = category ? products.filter(p => p.category === category) : products;
    
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="aspect-square overflow-hidden bg-muted">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                <Button size="sm">
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  В корзину
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <section id="catalog" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Каталог изделий</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Откройте для себя коллекцию уникальных сувениров из капа и сувеля
        </p>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
            <TabsTrigger value="all">Все</TabsTrigger>
            <TabsTrigger value="Шкатулки">Шкатулки</TabsTrigger>
            <TabsTrigger value="Украшения">Украшения</TabsTrigger>
            <TabsTrigger value="Декор">Декор</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            {renderProducts()}
          </TabsContent>

          <TabsContent value="Шкатулки" className="mt-8">
            {renderProducts('Шкатулки')}
          </TabsContent>

          <TabsContent value="Украшения" className="mt-8">
            {renderProducts('Украшения')}
          </TabsContent>

          <TabsContent value="Декор" className="mt-8">
            {renderProducts('Декор')}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
