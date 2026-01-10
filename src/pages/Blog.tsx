import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Как ухаживать за изделиями из капа и сувеля',
      excerpt:
        'Простые правила, которые помогут сохранить красоту и долговечность ваших деревянных изделий на долгие годы.',
      date: '15 декабря 2025',
      category: 'Уход',
      image: 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/ed9e1c46-b440-4acf-b0e7-bcbf147d5f95.jpg',
      icon: 'Droplet',
    },
    {
      id: 2,
      title: 'История капа: от древних времён до наших дней',
      excerpt:
        'Узнайте, как наши предки использовали кап и почему этот материал так ценился мастерами.',
      date: '8 декабря 2025',
      category: 'История',
      image: 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/7b971dbb-1606-4192-81a8-7d1c5f6e5452.jpg',
      icon: 'Book',
    },
    {
      id: 3,
      title: 'Отличия капа от сувеля: что выбрать?',
      excerpt:
        'Разбираемся в особенностях каждого материала и помогаем определиться с выбором изделия.',
      date: '1 декабря 2025',
      category: 'Материалы',
      image: 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/ed9e1c46-b440-4acf-b0e7-bcbf147d5f95.jpg',
      icon: 'TreeDeciduous',
    },
    {
      id: 4,
      title: 'Мастер-класс: процесс создания кружки',
      excerpt:
        'Фоторепортаж о том, как из необработанного куска капа рождается красивая и функциональная кружка.',
      date: '24 ноября 2025',
      category: 'Мастерство',
      image: 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/7b971dbb-1606-4192-81a8-7d1c5f6e5452.jpg',
      icon: 'Hammer',
    },
    {
      id: 5,
      title: 'Подарок с душой: почему изделия из дерева особенные',
      excerpt:
        'Деревянные изделия как символ тепла, уюта и связи с природой. Идеи для подарков близким.',
      date: '17 ноября 2025',
      category: 'Подарки',
      image: 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/ed9e1c46-b440-4acf-b0e7-bcbf147d5f95.jpg',
      icon: 'Gift',
    },
    {
      id: 6,
      title: 'Карельская берёза: почему она так ценится',
      excerpt:
        'Особенности карельской берёзы, её уникальные свойства и почему именно её древесина считается элитной.',
      date: '10 ноября 2025',
      category: 'Материалы',
      image: 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/7b971dbb-1606-4192-81a8-7d1c5f6e5452.jpg',
      icon: 'Leaf',
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Блог</h1>
          <p className="text-lg text-muted-foreground">
            Полезные статьи о материалах, уходе за изделиями, истории ремесла и
            секретах мастерства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name={post.icon as any} size={18} className="text-primary" />
                  <span className="text-sm font-medium text-primary">
                    {post.category}
                  </span>
                  <span className="text-sm text-muted-foreground ml-auto">
                    {post.date}
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-3">{post.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                <Button variant="outline" className="w-full">
                  Читать далее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            Загрузить ещё статьи
          </Button>
        </div>
      </div>
    </div>
  );
}
