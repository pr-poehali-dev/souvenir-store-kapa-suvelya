import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}

interface BlogAndFooterProps {
  blogPosts: BlogPost[];
}

export default function BlogAndFooter({ blogPosts }: BlogAndFooterProps) {
  return (
    <>
      <section id="about-materials" className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">О материалах</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Icon name="TreePine" size={28} className="mr-3 text-accent" />
                  Кап
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Кап — это нарост на стволе дерева, образовавшийся из-за резкого изменения направления роста волокон древесины. 
                  Текстура капа напоминает мрамор с уникальными узорами, которые не повторяются никогда.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Icon name="TreeDeciduous" size={28} className="mr-3 text-accent" />
                  Сувель
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Сувель — это нарост на дереве, образующийся от спящих почек. 
                  Древесина сувеля имеет перламутровый блеск и волнообразную текстуру, 
                  за что высоко ценится в декоративно-прикладном искусстве.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-us" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">О нас</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Мы — команда мастеров, влюблённых в работу с деревом. Уже более 10 лет создаём уникальные изделия из капа и сувеля, 
              раскрывая красоту природных материалов. Каждое наше изделие несёт частичку души мастера и энергию дерева, 
              накопленную за десятилетия роста.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <p className="text-muted-foreground">лет опыта</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">довольных клиентов</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <p className="text-muted-foreground">изделий создано</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Блог</h2>
          <p className="text-center text-muted-foreground mb-12">Истории и советы от наших мастеров</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardDescription>{post.date}</CardDescription>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="link" className="p-0">
                    Читать далее <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>Как ухаживать за изделиями из капа и сувеля?</AccordionTrigger>
              <AccordionContent>
                Изделия следует протирать мягкой сухой тканью. Избегайте прямых солнечных лучей и высокой влажности. 
                Раз в год можно обрабатывать натуральным маслом для дерева.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Сколько времени занимает изготовление на заказ?</AccordionTrigger>
              <AccordionContent>
                В среднем изготовление индивидуального заказа занимает от 2 до 4 недель, в зависимости от сложности изделия.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Можно ли вернуть товар?</AccordionTrigger>
              <AccordionContent>
                Да, вы можете вернуть товар в течение 14 дней с момента получения, если он не был в использовании и сохранён товарный вид.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Доставляете ли вы в другие города?</AccordionTrigger>
              <AccordionContent>
                Да, мы осуществляем доставку по всей России через транспортные компании. Стоимость доставки рассчитывается индивидуально.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Свяжитесь с нами</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Icon name="Phone" size={24} className="text-accent mr-4 mt-1" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Icon name="Mail" size={24} className="text-accent mr-4 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@dary-prirody.ru</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Icon name="MapPin" size={24} className="text-accent mr-4 mt-1" />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Мастеров, д. 15</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Icon name="Clock" size={24} className="text-accent mr-4 mt-1" />
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 10:00 - 19:00<br />Сб-Вс: 11:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
              <form className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input type="email" placeholder="Email" />
                <Input placeholder="Телефон" />
                <Textarea placeholder="Сообщение" rows={4} />
                <Button className="w-full">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary/5 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Trees" size={24} className="text-primary" />
                <span className="font-bold text-lg">Дары природы</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Уникальные сувениры из капа и сувеля ручной работы
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Шкатулки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Украшения</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Декор</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Посуда</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about-materials" className="hover:text-primary transition-colors">О материалах</a></li>
                <li><a href="#about-us" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#blog" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-3">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Facebook" size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Twitter" size={18} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Дары природы. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
