import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Home() {
  const features = [
    {
      icon: 'Hand',
      title: 'Ручная работа',
      description: 'Каждое изделие создается мастером вручную с любовью и вниманием к деталям',
    },
    {
      icon: 'TreeDeciduous',
      title: 'Натуральные материалы',
      description: 'Используем только качественный кап и сувель карельской берёзы',
    },
    {
      icon: 'Sparkles',
      title: 'Уникальность',
      description: 'Неповторимый природный рисунок делает каждое изделие эксклюзивным',
    },
    {
      icon: 'Shield',
      title: 'Долговечность',
      description: 'Изделия прослужат десятилетия при правильном уходе',
    },
  ];

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
    <div className="flex flex-col">
      <section
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/97a310f8-e28d-4552-ae57-e05e937d4ac1.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Сувениры из капа и сувеля
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Уникальные изделия ручной работы с неповторимым природным рисунком
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg">
              <Link to="/catalog">Смотреть каталог</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20 hover:text-white">
              <Link to="/about">О процессе изготовления</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <Icon name={feature.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Icon name="Leaf" size={48} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Природная красота в каждом изделии
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Кап и сувель — это уникальные наросты на деревьях, которые создаются природой
              десятилетиями. Неповторимый узор древесины делает каждое наше изделие
              настоящим произведением искусства.
            </p>
            <Button size="lg" asChild>
              <Link to="/materials">Узнать больше о материалах</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
