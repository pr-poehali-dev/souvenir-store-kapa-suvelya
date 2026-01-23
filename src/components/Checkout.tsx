import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { CartItem } from './Cart';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  total: number;
  onSuccess: () => void;
}

export default function Checkout({ isOpen, onClose, items, total, onSuccess }: CheckoutProps) {
  const [step, setStep] = useState<'contact' | 'delivery' | 'payment'>('contact');
  const [contactData, setContactData] = useState({ name: '', phone: '', email: '' });
  const [deliveryMethod, setDeliveryMethod] = useState('pickup');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryZipCode, setDeliveryZipCode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const deliveryCost = deliveryMethod === 'delivery' ? 500 : 0;
  const finalTotal = total + deliveryCost;

  const handleNext = () => {
    if (step === 'contact') setStep('delivery');
    else if (step === 'delivery') setStep('payment');
  };

  const handleBack = () => {
    if (step === 'payment') setStep('delivery');
    else if (step === 'delivery') setStep('contact');
  };

  const handleSubmit = () => {
    alert(`Заказ оформлен!\n\nИмя: ${contactData.name}\nТелефон: ${contactData.phone}\nДоставка: ${deliveryMethod === 'pickup' ? 'Самовывоз' : 'Доставка по адресу: ' + deliveryAddress}\nОплата: ${paymentMethod === 'card' ? 'Картой онлайн' : 'При получении'}\nИтого: ${finalTotal.toLocaleString('ru-RU')} ₽`);
    onSuccess();
    onClose();
    setStep('contact');
  };

  const isContactValid = contactData.name && contactData.phone;
  const isDeliveryValid = deliveryMethod === 'pickup' || (deliveryMethod === 'delivery' && deliveryAddress) || (deliveryMethod === 'transport' && deliveryAddress && deliveryZipCode);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Оформление заказа</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Прогресс */}
          <div className="flex items-center justify-between">
            <div className={`flex items-center gap-2 ${step === 'contact' ? 'text-primary font-semibold' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'contact' ? 'bg-primary text-white' : 'bg-muted'}`}>1</div>
              <span>Контакты</span>
            </div>
            <div className={`flex items-center gap-2 ${step === 'delivery' ? 'text-primary font-semibold' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'delivery' ? 'bg-primary text-white' : 'bg-muted'}`}>2</div>
              <span>Доставка</span>
            </div>
            <div className={`flex items-center gap-2 ${step === 'payment' ? 'text-primary font-semibold' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'payment' ? 'bg-primary text-white' : 'bg-muted'}`}>3</div>
              <span>Оплата</span>
            </div>
          </div>

          {/* Шаг 1: Контактные данные */}
          {step === 'contact' && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Имя *</Label>
                <Input
                  id="name"
                  value={contactData.name}
                  onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={contactData.phone}
                  onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={contactData.email}
                  onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                  placeholder="email@example.com"
                />
              </div>
            </div>
          )}

          {/* Шаг 2: Доставка */}
          {step === 'delivery' && (
            <div className="space-y-4">
              <Label>Способ получения</Label>
              <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>
                <div className="flex items-center space-x-2 border rounded p-4">
                  <RadioGroupItem value="pickup" id="pickup" />
                  <Label htmlFor="pickup" className="flex-1 cursor-pointer">
                    <div className="font-semibold">Самовывоз</div>
                    <div className="text-sm text-muted-foreground">Бесплатно</div>
                  </Label>
                  <Icon name="Store" size={24} />
                </div>
                <div className="flex items-center space-x-2 border rounded p-4">
                  <RadioGroupItem value="delivery" id="delivery" />
                  <Label htmlFor="delivery" className="flex-1 cursor-pointer">
                    <div className="font-semibold">Доставка курьером</div>
                    <div className="text-sm text-muted-foreground">500 ₽</div>
                  </Label>
                  <Icon name="Truck" size={24} />
                </div>
                <div className="flex items-center space-x-2 border rounded p-4">
                  <RadioGroupItem value="transport" id="transport" />
                  <Label htmlFor="transport" className="flex-1 cursor-pointer">
                    <div className="font-semibold">Доставка транспортной компанией</div>
                    <div className="text-sm text-muted-foreground">Оплата при получении в ТК</div>
                  </Label>
                  <Icon name="Package" size={24} />
                </div>
              </RadioGroup>

              {deliveryMethod === 'delivery' && (
                <div>
                  <Label htmlFor="address">Адрес доставки *</Label>
                  <Input
                    id="address"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Улица, дом, квартира"
                  />
                </div>
              )}

              {deliveryMethod === 'transport' && (
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="zipcode">Почтовый индекс *</Label>
                    <Input
                      id="zipcode"
                      value={deliveryZipCode}
                      onChange={(e) => setDeliveryZipCode(e.target.value)}
                      placeholder="123456"
                      maxLength={6}
                    />
                  </div>
                  <div>
                    <Label htmlFor="full-address">Полный адрес доставки *</Label>
                    <Input
                      id="full-address"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      placeholder="Город, улица, дом, квартира"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Шаг 3: Оплата */}
          {step === 'payment' && (
            <div className="space-y-4">
              <Label>Способ оплаты</Label>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-center space-x-2 border rounded p-4">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex-1 cursor-pointer">
                    <div className="font-semibold">Картой онлайн</div>
                    <div className="text-sm text-muted-foreground">Visa, MasterCard, МИР</div>
                  </Label>
                  <Icon name="CreditCard" size={24} />
                </div>
                <div className="flex items-center space-x-2 border rounded p-4">
                  <RadioGroupItem value="cash" id="cash" />
                  <Label htmlFor="cash" className="flex-1 cursor-pointer">
                    <div className="font-semibold">При получении</div>
                    <div className="text-sm text-muted-foreground">Наличными или картой</div>
                  </Label>
                  <Icon name="Wallet" size={24} />
                </div>
              </RadioGroup>

              {/* Итоговая информация */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Товары ({items.length} шт.)</span>
                  <span>{total.toLocaleString('ru-RU')} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Доставка</span>
                  <span>{deliveryCost === 0 ? 'Бесплатно' : `${deliveryCost.toLocaleString('ru-RU')} ₽`}</span>
                </div>
                <div className="flex justify-between text-xl font-bold">
                  <span>Итого</span>
                  <span className="text-primary">{finalTotal.toLocaleString('ru-RU')} ₽</span>
                </div>
              </div>
            </div>
          )}

          {/* Кнопки навигации */}
          <div className="flex gap-3">
            {step !== 'contact' && (
              <Button variant="outline" onClick={handleBack} className="flex-1">
                <Icon name="ChevronLeft" size={18} className="mr-2" />
                Назад
              </Button>
            )}
            {step === 'payment' ? (
              <Button onClick={handleSubmit} className="flex-1">
                Оформить заказ
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={step === 'contact' ? !isContactValid : !isDeliveryValid}
                className="flex-1"
              >
                Далее
                <Icon name="ChevronRight" size={18} className="ml-2" />
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}