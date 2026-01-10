import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  const contacts = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (999) 123-45-67',
      link: 'tel:+79991234567',
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@example.com',
      link: 'mailto:info@example.com',
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'Россия, Карелия',
      link: null,
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      value: 'Пн-Пт: 9:00 - 18:00',
      link: null,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Контакты</h1>
          <p className="text-lg text-muted-foreground">
            Свяжитесь с нами любым удобным способом. Мы всегда рады ответить на ваши
            вопросы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                  <Icon name={contact.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{contact.title}</h3>
                {contact.link ? (
                  <a
                    href={contact.link}
                    className="text-primary hover:underline text-sm"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">{contact.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Напишите нам</h2>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Ваше имя
                    </label>
                    <Input id="name" placeholder="Иван Иванов" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Телефон
                    </label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите, чем мы можем помочь"
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Часто задаваемые вопросы</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Можно ли заказать изделие по индивидуальному эскизу?</h3>
                  <p className="text-sm text-muted-foreground">
                    Да, мы принимаем индивидуальные заказы. Свяжитесь с нами, и мы
                    обсудим ваши пожелания.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Сколько времени занимает изготовление?</h3>
                  <p className="text-sm text-muted-foreground">
                    В наличии есть готовые изделия. Индивидуальный заказ выполняется
                    в течение 2-4 недель.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Как ухаживать за изделиями?</h3>
                  <p className="text-sm text-muted-foreground">
                    Мы предоставляем подробные инструкции по уходу с каждым изделием.
                    Основные правила — избегать прямых солнечных лучей и влаги.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Даёте ли вы гарантию?</h3>
                  <p className="text-sm text-muted-foreground">
                    Да, на все изделия предоставляется гарантия качества. При
                    правильном уходе они прослужат десятилетия.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-8">
          <div className="text-center max-w-2xl mx-auto">
            <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Мы в социальных сетях</h3>
            <p className="text-muted-foreground mb-6">
              Следите за нашими новинками, процессом создания изделий и специальными
              предложениями
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
