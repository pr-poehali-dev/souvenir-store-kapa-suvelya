import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Materials() {
  const materials = [
    {
      name: 'Кап берёзы',
      icon: 'TreeDeciduous',
      description:
        'Кап — это нарост на стволе или корне дерева, образующийся в результате интенсивного роста спящих почек. Древесина капа имеет плотную структуру с уникальным рисунком из завитков и глазков.',
      properties: [
        'Высокая плотность и твёрдость',
        'Неповторимый природный узор',
        'Устойчивость к деформации',
        'Красивый янтарный оттенок',
      ],
      image: 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/ed9e1c46-b440-4acf-b0e7-bcbf147d5f95.jpg',
    },
    {
      name: 'Сувель берёзы',
      icon: 'TreePine',
      description:
        'Сувель — это наплыв на стволе дерева, который образуется из-за болезни или повреждения. В отличие от капа, сувель имеет волокнистую структуру с перламутровым переливом и мраморным рисунком.',
      properties: [
        'Перламутровый блеск',
        'Мраморный узор древесины',
        'Лёгкость в обработке',
        'Тёплые медовые оттенки',
      ],
      image: 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/7b971dbb-1606-4192-81a8-7d1c5f6e5452.jpg',
    },
  ];

  const advantages = [
    {
      icon: 'Leaf',
      title: 'Экологичность',
      description: 'Используем только упавшие деревья и сухостой, не вредя живым растениям',
    },
    {
      icon: 'Award',
      title: 'Премиум качество',
      description: 'Тщательный отбор материала и многоэтапная обработка',
    },
    {
      icon: 'Heart',
      title: 'Энергетика дерева',
      description: 'Изделия из карельской берёзы обладают особой природной энергетикой',
    },
    {
      icon: 'Clock',
      title: 'Долговечность',
      description: 'При правильном уходе изделия служат десятилетиями',
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">О материалах</h1>
          <p className="text-lg text-muted-foreground">
            Кап и сувель — уникальные природные материалы, которые создаются
            деревом десятилетиями. Каждый нарост имеет неповторимый узор,
            делающий наши изделия эксклюзивными.
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {materials.map((material, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className="lg:w-1/2">
                <img
                  src={material.image}
                  alt={material.name}
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon name={material.icon as any} size={32} className="text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">{material.name}</h2>
                </div>
                <p className="text-lg text-muted-foreground">{material.description}</p>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Особенности материала:</h3>
                  <ul className="space-y-2">
                    {material.properties.map((prop, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span>{prop}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-muted/30 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Преимущества наших материалов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center border-border/50">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <Icon name={advantage.icon as any} size={28} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-primary/5 rounded-lg p-8 text-center">
          <Icon name="Info" size={48} className="text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Важно знать</h3>
          <p className="text-muted-foreground">
            Каждое изделие из капа и сувеля уникально. Рисунок древесины, оттенок и
            текстура могут отличаться от представленных на фотографиях. Это
            особенность натурального материала, придающая вашему изделию
            индивидуальность и эксклюзивность.
          </p>
        </div>
      </div>
    </div>
  );
}
