import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function FeaturesSection() {
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

  return (
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
  );
}
