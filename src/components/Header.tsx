import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Header() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/catalog', label: 'Каталог' },
    { path: '/materials', label: 'О товарах' },
    { path: '/about', label: 'О нас' },
    { path: '/blog', label: 'Блог' },
    { path: '/delivery', label: 'Доставка' },
    { path: '/contacts', label: 'Контакты' },
    { path: '/admin', label: 'Админка' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <nav className="flex h-12 items-center justify-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary pb-1 ${
                isActive(item.path) ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link to="/" className="flex items-center justify-center space-x-2 py-3 border-t">
          <Icon name="TreeDeciduous" size={28} className="text-primary" />
          <span className="text-xl font-bold text-foreground">Деревянные Узоры</span>
        </Link>
      </div>
    </header>
  );
}