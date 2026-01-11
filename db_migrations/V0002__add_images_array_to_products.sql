-- Добавляем новую колонку для массива изображений
ALTER TABLE t_p22032142_souvenir_store_kapa_.products 
ADD COLUMN images text[] DEFAULT ARRAY[]::text[];

-- Переносим существующие image_url в массив images
UPDATE t_p22032142_souvenir_store_kapa_.products 
SET images = ARRAY[image_url]::text[]
WHERE image_url IS NOT NULL AND image_url != '';

-- Обновляем пустые значения
UPDATE t_p22032142_souvenir_store_kapa_.products 
SET images = ARRAY[]::text[]
WHERE image_url IS NULL OR image_url = '';

COMMENT ON COLUMN t_p22032142_souvenir_store_kapa_.products.images IS 'Массив URL изображений товара';