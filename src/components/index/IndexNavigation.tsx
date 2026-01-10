import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface IndexNavigationProps {
  scrollToSection: (sectionId: string) => void;
}

export default function IndexNavigation({ scrollToSection }: IndexNavigationProps) {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Trees" size={28} className="text-primary" />
            <span className="text-xl font-bold text-primary">Дары природы</span>
          </div>
          
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('catalog')} className="text-sm font-medium hover:text-primary transition-colors">Каталог</button>
            <button onClick={() => scrollToSection('about-materials')} className="text-sm font-medium hover:text-primary transition-colors">О товарах</button>
            <button onClick={() => scrollToSection('about-us')} className="text-sm font-medium hover:text-primary transition-colors">О нас</button>
            <button onClick={() => scrollToSection('blog')} className="text-sm font-medium hover:text-primary transition-colors">Блог</button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
          </div>

          <Button variant="outline" size="sm">
            <Icon name="ShoppingCart" size={18} className="mr-2" />
            Корзина
          </Button>
        </div>
      </div>
    </nav>
  );
}
