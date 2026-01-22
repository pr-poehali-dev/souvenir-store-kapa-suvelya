CREATE TABLE IF NOT EXISTS t_p22032142_souvenir_store_kapa_.orders (
    id SERIAL PRIMARY KEY,
    payment_id VARCHAR(255) UNIQUE NOT NULL,
    customer_name VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(50),
    delivery_address TEXT NOT NULL,
    items JSONB NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    payment_status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_orders_payment_id ON t_p22032142_souvenir_store_kapa_.orders(payment_id);
CREATE INDEX idx_orders_status ON t_p22032142_souvenir_store_kapa_.orders(payment_status);
CREATE INDEX idx_orders_created ON t_p22032142_souvenir_store_kapa_.orders(created_at DESC);