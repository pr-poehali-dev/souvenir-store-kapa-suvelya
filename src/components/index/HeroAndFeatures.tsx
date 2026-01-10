import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HeroAndFeaturesProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HeroAndFeatures({ scrollToSection }: HeroAndFeaturesProps) {
  return (
    <>
      <section id="home" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/268ca73e-9763-49f6-98ce-ae12acc2ac84.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Сувениры из капа и сувеля
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Уникальные изделия ручной работы из редких природных материалов
          </p>
          <Button size="lg" className="text-lg" onClick={() => scrollToSection('catalog')}>
            Смотреть каталог
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center animate-fade-in hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Hand" size={32} className="text-accent" />
                </div>
                <CardTitle>Ручная работа</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Каждое изделие создаётся вручную опытными мастерами</p>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Sparkles" size={32} className="text-accent" />
                </div>
                <CardTitle>Уникальные узоры</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Природа создала неповторимый рисунок в каждом изделии</p>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Shield" size={32} className="text-accent" />
                </div>
                <CardTitle>Долговечность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Изделия служат десятилетиями при правильном уходе</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
