import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <Link to="/" className="flex items-center justify-center space-x-2 py-4">
          <Icon name="TreeDeciduous" size={32} className="text-primary" />
          <span className="text-2xl font-bold text-foreground">Древесные Узоры</span>
        </Link>
      </div>
      <a
        href="https://t.me/AndersonKov"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#0088cc] text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Написать в Telegram"
      >
        <Icon name="Send" size={24} />
      </a>
    </header>
  );
}