import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const products = [
    {
      id: 1,
      name: 'Шкатулка из капа',
      category: 'Шкатулки',
      price: 4500,
      image: 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/64b979ea-797a-4c39-85f7-ef37fee70cc3.jpg'
    },
    {
      id: 2,
      name: 'Брелок из сувеля',
      category: 'Брелоки',
      price: 850,
      image: 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/268ca73e-9763-49f6-98ce-ae12acc2ac84.jpg'
    },
    {
      id: 3,
      name: 'Подставка для телефона',
      category: 'Аксессуары',
      price: 1200,
      image: 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/80471bd8-443b-4cb4-8ec2-7fd6368ae961.jpg'
    },
    {
      id: 4,
      name: 'Кулон из капа',
      category: 'Украшения',
      price: 1800,
      image: 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/268ca73e-9763-49f6-98ce-ae12acc2ac84.jpg'
    },
    {
      id: 5,
      name: 'Набор для чая',
      category: 'Посуда',
      price: 5200,
      image: 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/64b979ea-797a-4c39-85f7-ef37fee70cc3.jpg'
    },
    {
      id: 6,
      name: 'Панно настенное',
      category: 'Декор',
      price: 6800,
      image: 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/80471bd8-443b-4cb4-8ec2-7fd6368ae961.jpg'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Как создаётся шкатулка из капа',
      excerpt: 'Процесс изготовления шкатулки начинается с тщательного отбора материала. Каждый кусочек капа уникален...',
      date: '15 декабря 2025'
    },
    {
      id: 2,
      title: 'Что такое сувель и чем он отличается от капа',
      excerpt: 'Сувель и кап — два удивительных природных материала, которые часто путают. Разбираемся в различиях...',
      date: '10 декабря 2025'
    },
    {
      id: 3,
      title: 'Уход за изделиями из дерева',
      excerpt: 'Правильный уход продлит жизнь вашему сувениру на десятилетия. Делимся секретами мастеров...',
      date: '5 декабря 2025'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
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

      <section id="home" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/268ca73e-9763-49f6-98ce-ae12acc2ac84.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Сувениры из капа и сувеля
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Уникальные изделия ручной работы из редких природных материалов
          </p>
          <Button size="lg" className="text-lg" onClick={() => scrollToSection('catalog')}>
            Смотреть каталог
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center animate-fade-in hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Hand" size={32} className="text-accent" />
                </div>
                <CardTitle>Ручная работа</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Каждое изделие создаётся вручную опытными мастерами</p>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Sparkles" size={32} className="text-accent" />
                </div>
                <CardTitle>Уникальные узоры</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Природа создала неповторимый рисунок в каждом изделии</p>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Shield" size={32} className="text-accent" />
                </div>
                <CardTitle>Долговечность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Изделия служат десятилетиями при правильном уходе</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Каталог изделий</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Откройте для себя коллекцию уникальных сувениров из капа и сувеля
          </p>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="Шкатулки">Шкатулки</TabsTrigger>
              <TabsTrigger value="Украшения">Украшения</TabsTrigger>
              <TabsTrigger value="Декор">Декор</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <Card key={product.id} className="overflow-hidden group hover:shadow-xl transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader>
                      <CardDescription>{product.category}</CardDescription>
                      <CardTitle>{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                        <Button size="sm">
                          <Icon name="ShoppingCart" size={16} className="mr-2" />
                          В корзину
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {['Шкатулки', 'Украшения', 'Декор'].map(category => (
              <TabsContent key={category} value={category} className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.filter(p => p.category === category).map((product, index) => (
                    <Card key={product.id} className="overflow-hidden group hover:shadow-xl transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardHeader>
                        <CardDescription>{product.category}</CardDescription>
                        <CardTitle>{product.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                          <Button size="sm">
                            <Icon name="ShoppingCart" size={16} className="mr-2" />
                            В корзину
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="about-materials" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">О наших материалах</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Кап и сувель — редкие природные материалы с уникальными свойствами
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/268ca73e-9763-49f6-98ce-ae12acc2ac84.jpg"
                alt="Текстура капа"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3 flex items-center">
                  <Icon name="Circle" size={20} className="mr-2 text-primary" />
                  Что такое кап?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Кап — это доброкачественное новообразование на стволах деревьев. Он имеет текстуру с многочисленными вкраплениями древесных узелков. Каждый кап уникален, и невозможно найти два одинаковых рисунка.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 flex items-center">
                  <Icon name="Sparkles" size={20} className="mr-2 text-primary" />
                  Что такое сувель?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Сувель отличается от капа более волнистой структурой волокон. Он формируется на стволе дерева в виде наплыва. Сувель имеет перламутровый блеск и изысканный узор, напоминающий мрамор.
                </p>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                <p className="text-sm leading-relaxed">
                  <strong>Важно знать:</strong> Сбор капа и сувеля производится только с упавших деревьев или санитарных вырубок. Мы бережно относимся к природе и не наносим вред живым деревьям.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-us" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold mb-6">О нашей мастерской</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Наша мастерская работает с 2010 года. За это время мы создали более 5000 уникальных изделий, которые разошлись по всей России и за её пределами.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Каждый мастер в нашей команде имеет профильное образование и опыт работы с деревом более 10 лет. Мы используем только традиционные техники обработки и экологичные покрытия.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-secondary/50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="bg-secondary/50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-sm text-muted-foreground">Изделий создано</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/80471bd8-443b-4cb4-8ec2-7fd6368ae961.jpg"
                alt="Наша мастерская"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Блог</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Истории создания, секреты мастерства и уход за изделиями
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardDescription>{post.date}</CardDescription>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты и доставка</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Icon name="MapPin" size={24} className="text-primary mr-4 mt-1" />
                  <div>
                    <div className="font-semibold">Адрес мастерской</div>
                    <div className="text-muted-foreground">г. Петрозаводск, ул. Мастеровая, 15</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Phone" size={24} className="text-primary mr-4 mt-1" />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (900) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Mail" size={24} className="text-primary mr-4 mt-1" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">info@dary-prirody.ru</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Clock" size={24} className="text-primary mr-4 mt-1" />
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <div className="text-muted-foreground">Пн-Пт: 10:00 - 19:00<br/>Сб-Вс: 11:00 - 17:00</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Доставка</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="flex items-center">
                      <Icon name="Truck" size={20} className="mr-2 text-primary" />
                      Доставка по России
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Осуществляем доставку во все регионы России через СДЭК и Почту России. Срок доставки 3-10 дней. Стоимость рассчитывается индивидуально в зависимости от региона и веса посылки.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <div className="flex items-center">
                      <Icon name="Package" size={20} className="mr-2 text-primary" />
                      Самовывоз
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Вы можете забрать заказ самостоятельно из нашей мастерской по адресу: г. Петрозаводск, ул. Мастеровая, 15. Предварительно согласуйте время визита по телефону.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <div className="flex items-center">
                      <Icon name="Shield" size={20} className="mr-2 text-primary" />
                      Гарантия качества
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Каждое изделие тщательно упаковывается и проходит контроль качества. Мы гарантируем сохранность при транспортировке. В случае повреждения при доставке — полный возврат средств.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    <div className="flex items-center">
                      <Icon name="CreditCard" size={20} className="mr-2 text-primary" />
                      Оплата
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Принимаем оплату картами, переводом на карту, наличными при самовывозе. Для юридических лиц возможна оплата по счёту с НДС.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Trees" size={28} />
                <span className="text-xl font-bold">Дары природы</span>
              </div>
              <p className="text-sm opacity-80">
                Уникальные сувениры из капа и сувеля ручной работы с 2010 года
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => scrollToSection('catalog')} className="block hover:underline opacity-80 hover:opacity-100">Каталог</button>
                <button onClick={() => scrollToSection('about-materials')} className="block hover:underline opacity-80 hover:opacity-100">О товарах</button>
                <button onClick={() => scrollToSection('about-us')} className="block hover:underline opacity-80 hover:opacity-100">О нас</button>
                <button onClick={() => scrollToSection('blog')} className="block hover:underline opacity-80 hover:opacity-100">Блог</button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p>+7 (900) 123-45-67</p>
                <p>info@dary-prirody.ru</p>
                <p>г. Петрозаводск</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Icon name="Mail" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Icon name="Phone" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-80">
            <p>&copy; 2025 Дары природы. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
