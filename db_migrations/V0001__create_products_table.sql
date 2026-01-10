CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100) NOT NULL,
    price INTEGER NOT NULL,
    material VARCHAR(100),
    image_url TEXT,
    in_stock BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_in_stock ON products(in_stock);

INSERT INTO products (name, description, category, price, material, image_url) VALUES
('Кружка из капа берёзы', 'Уникальная кружка ручной работы с неповторимым природным узором', 'cups', 3500, 'Кап берёзы', 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/ed9e1c46-b440-4acf-b0e7-bcbf147d5f95.jpg'),
('Чаша из сувеля', 'Элегантная чаша с перламутровым блеском', 'bowls', 5200, 'Сувель берёзы', 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/7b971dbb-1606-4192-81a8-7d1c5f6e5452.jpg'),
('Шкатулка малая', 'Компактная шкатулка для украшений', 'boxes', 4800, 'Кап берёзы', 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/ed9e1c46-b440-4acf-b0e7-bcbf147d5f95.jpg'),
('Кружка из сувеля', 'Кружка с мраморным узором древесины', 'cups', 3800, 'Сувель берёзы', 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/ed9e1c46-b440-4acf-b0e7-bcbf147d5f95.jpg'),
('Чаша большая из капа', 'Вместительная чаша для фруктов', 'bowls', 6500, 'Кап берёзы', 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/7b971dbb-1606-4192-81a8-7d1c5f6e5452.jpg'),
('Шкатулка большая', 'Просторная шкатулка с резьбой', 'boxes', 7200, 'Сувель берёзы', 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/ed9e1c46-b440-4acf-b0e7-bcbf147d5f95.jpg'),
('Подставка для телефона', 'Удобная подставка с природным узором', 'accessories', 2500, 'Кап берёзы', 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/ed9e1c46-b440-4acf-b0e7-bcbf147d5f95.jpg'),
('Набор ложек 3 шт', 'Столовые ложки из сувеля', 'accessories', 4200, 'Сувель берёзы', 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/7b971dbb-1606-4192-81a8-7d1c5f6e5452.jpg'),
('Браслет из капа', 'Стильный браслет с уникальным рисунком', 'accessories', 1800, 'Кап берёзы', 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/ed9e1c46-b440-4acf-b0e7-bcbf147d5f95.jpg'),
('Ваза декоративная', 'Изящная ваза ручной работы', 'decor', 8500, 'Сувель берёзы', 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/7b971dbb-1606-4192-81a8-7d1c5f6e5452.jpg'),
('Подсвечник', 'Атмосферный подсвечник из капа', 'decor', 3200, 'Кап берёзы', 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/ed9e1c46-b440-4acf-b0e7-bcbf147d5f95.jpg'),
('Разделочная доска', 'Практичная доска для кухни', 'kitchen', 5800, 'Кап берёзы', 'https://cdn.poehali.dev/projects/54c27d0e-ba02-43f0-856f-eb66f8a51a27/files/7b971dbb-1606-4192-81a8-7d1c5f6e5452.jpg');