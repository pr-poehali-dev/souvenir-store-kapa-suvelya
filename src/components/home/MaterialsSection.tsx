import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function MaterialsSection() {
  return (
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
  );
}
