import { useState } from 'react';
import IndexNavigation from '@/components/index/IndexNavigation';
import HeroAndFeatures from '@/components/index/HeroAndFeatures';
import CatalogSection from '@/components/index/CatalogSection';
import BlogAndFooter from '@/components/index/BlogAndFooter';

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
      <IndexNavigation scrollToSection={scrollToSection} />
      <HeroAndFeatures scrollToSection={scrollToSection} />
      <CatalogSection products={products} />
      <BlogAndFooter blogPosts={blogPosts} />
    </div>
  );
};

export default Index;
