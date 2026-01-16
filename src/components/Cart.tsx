import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image_url: string;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
  onClear: () => void;
}

export default function Cart({ items, onUpdateQuantity, onRemove, onClear }: CartProps) {
  const [isOpen, setIsOpen] = useState(false);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Icon name="ShoppingCart" size={20} />
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Корзина</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-muted-foreground">
            <Icon name="ShoppingCart" size={64} className="mb-4 opacity-20" />
            <p>Корзина пуста</p>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 border-b pb-4">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-primary font-semibold">
                    {item.price.toLocaleString('ru-RU')} ₽
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8"
                      onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    >
                      <Icon name="Minus" size={16} />
                    </Button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8"
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      <Icon name="Plus" size={16} />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 ml-auto text-destructive"
                      onClick={() => onRemove(item.id)}
                    >
                      <Icon name="Trash2" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-4 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Итого:</span>
                <span className="text-primary">{total.toLocaleString('ru-RU')} ₽</span>
              </div>

              <Button className="w-full" size="lg">
                <Icon name="CreditCard" size={20} className="mr-2" />
                Оформить заказ
              </Button>

              <Button
                variant="outline"
                className="w-full"
                onClick={onClear}
              >
                Очистить корзину
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
