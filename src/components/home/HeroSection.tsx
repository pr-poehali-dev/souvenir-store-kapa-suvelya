import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section
      className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/914730da-639a-4aef-87a9-db8b3519014e.jpg)',
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
          Сувениры из капа и сувеля
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-foreground/80">
          Уникальные изделия ручной работы с неповторимым природным рисунком
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="text-lg">
            <Link to="/catalog">Смотреть каталог</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-lg">
            <Link to="/about">О процессе изготовления</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
