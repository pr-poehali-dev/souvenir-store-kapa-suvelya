import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function About() {
  const steps = [
    {
      number: '01',
      title: 'Отбор материала',
      description:
        'Тщательно выбираем кап и сувель с красивым узором. Используем только сухостой и упавшие деревья, не нанося вреда природе.',
      icon: 'Search',
    },
    {
      number: '02',
      title: 'Сушка',
      description:
        'Материал проходит длительную естественную сушку в течение 1-2 лет. Это предотвращает деформацию и растрескивание готового изделия.',
      icon: 'Wind',
    },
    {
      number: '03',
      title: 'Черновая обработка',
      description:
        'Мастер вручную придаёт заготовке нужную форму, учитывая особенности текстуры и рисунка древесины.',
      icon: 'Hammer',
    },
    {
      number: '04',
      title: 'Точение и шлифовка',
      description:
        'На токарном станке изделие приобретает окончательную форму. Затем следует многоступенчатая шлифовка — от грубой до самой тонкой.',
      icon: 'Disc3',
    },
    {
      number: '05',
      title: 'Пропитка маслом',
      description:
        'Изделие пропитывается натуральным маслом в несколько слоёв. Это защищает древесину и проявляет её природную красоту.',
      icon: 'Droplet',
    },
    {
      number: '06',
      title: 'Полировка',
      description:
        'Финальная полировка придаёт изделию шелковистую поверхность и благородный блеск. Изделие готово!',
      icon: 'Sparkles',
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            О процессе изготовления
          </h1>
          <p className="text-lg text-muted-foreground">
            Создание каждого изделия — это кропотливый процесс, требующий мастерства,
            терпения и любви к природному материалу. От выбора заготовки до финальной
            полировки проходит несколько месяцев.
          </p>
        </div>

        <div className="mb-16">
          <div className="grid gap-8">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-primary/10 p-8 flex items-center justify-center md:w-48 flex-shrink-0">
                      <div className="text-center">
                        <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20">
                          <Icon name={step.icon as any} size={32} className="text-primary" />
                        </div>
                        <div className="text-4xl font-bold text-primary">
                          {step.number}
                        </div>
                      </div>
                    </div>
                    <div className="p-8 flex-1">
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground text-lg">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center border-border/50">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <p className="text-muted-foreground">лет опыта</p>
            </CardContent>
          </Card>
          <Card className="text-center border-border/50">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">довольных клиентов</p>
            </CardContent>
          </Card>
          <Card className="text-center border-border/50">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">ручная работа</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/30 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center">
            <Icon name="Heart" size={48} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Философия мастерства</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Мы не просто изготавливаем изделия — мы раскрываем красоту, которую
              природа создавала десятилетиями. Каждый нарост дерева уникален, и
              задача мастера — увидеть в нём будущее изделие и бережно воплотить
              задуманное в жизнь.
            </p>
            <p className="text-lg text-muted-foreground">
              Работа с капом и сувелем требует особого подхода и понимания материала.
              Мы не спешим, не идём на компромиссы в качестве. Результат — изделия,
              которые будут радовать вас и ваших близких долгие годы.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
