import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Delivery() {
  const deliveryOptions = [
    {
      icon: 'Truck',
      title: 'Почта России',
      time: '7-14 дней',
      price: 'от 350 ₽',
      description: 'Доставка в любой населённый пункт РФ',
    },
    {
      icon: 'Package',
      title: 'СДЭК',
      time: '3-7 дней',
      price: 'от 450 ₽',
      description: 'Доставка до пункта выдачи или курьером',
    },
    {
      icon: 'Zap',
      title: 'Экспресс-доставка',
      time: '1-3 дня',
      price: 'от 800 ₽',
      description: 'Быстрая доставка в крупные города',
    },
  ];

  const paymentMethods = [
    {
      icon: 'CreditCard',
      title: 'Банковская карта',
      description: 'Оплата онлайн на сайте',
    },
    {
      icon: 'Smartphone',
      title: 'СБП',
      description: 'Система быстрых платежей',
    },
    {
      icon: 'Wallet',
      title: 'При получении',
      description: 'Наличными или картой курьеру',
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Доставка и оплата</h1>
          <p className="text-lg text-muted-foreground">
            Мы работаем со всеми крупными службами доставки и предлагаем удобные
            способы оплаты
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Способы доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliveryOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <Icon name={option.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm font-medium text-primary">
                      {option.time}
                    </span>
                    <span className="text-sm font-bold">{option.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 bg-muted/30 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Icon name="Info" size={24} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Условия доставки</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Бесплатная доставка при заказе от 10 000 ₽</li>
                  <li>• Тщательная упаковка каждого изделия</li>
                  <li>• Отправка в течение 1-3 рабочих дней</li>
                  <li>• Отслеживание посылки по трек-номеру</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Способы оплаты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <Icon name={method.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground text-sm">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Возврат и обмен</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="RefreshCw" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Обмен</h4>
                    <p className="text-muted-foreground text-sm">
                      Возможен в течение 14 дней с момента получения, если изделие не
                      подошло по размеру или внешнему виду
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="AlertCircle" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Возврат</h4>
                    <p className="text-muted-foreground text-sm">
                      Возможен в течение 14 дней, если товар не использовался и сохранён
                      товарный вид. Стоимость обратной доставки оплачивает покупатель
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Shield" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Гарантия качества</h4>
                    <p className="text-muted-foreground text-sm">
                      Если вы получили бракованное изделие, мы заменим его за наш счёт
                      или вернём полную стоимость
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary/5 rounded-lg p-8">
          <div className="text-center max-w-2xl mx-auto">
            <Icon name="MessageCircle" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Остались вопросы?</h3>
            <p className="text-muted-foreground mb-6">
              Свяжитесь с нами любым удобным способом, и мы с радостью ответим на все
              ваши вопросы о доставке и оплате
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+79991234567"
                className="flex items-center gap-2 justify-center text-primary hover:underline"
              >
                <Icon name="Phone" size={20} />
                <span>+7 (999) 123-45-67</span>
              </a>
              <a
                href="mailto:info@example.com"
                className="flex items-center gap-2 justify-center text-primary hover:underline"
              >
                <Icon name="Mail" size={20} />
                <span>info@example.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
