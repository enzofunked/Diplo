-- Create the quotes table with all necessary columns
CREATE TABLE IF NOT EXISTS quotes (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  company VARCHAR(255),
  address TEXT NOT NULL,
  local_type VARCHAR(100) NOT NULL,
  surface_area INTEGER NOT NULL,
  interventions_per_week INTEGER NOT NULL,
  hygiene_products JSONB DEFAULT '{}',
  photos TEXT[] DEFAULT ARRAY[]::TEXT[],
  estimated_price DECIMAL(10,2) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  signed_at TIMESTAMP WITH TIME ZONE,
  signature_data_url TEXT,
  pdf_url TEXT
);

-- Create the appointments table with all necessary columns
CREATE TABLE IF NOT EXISTS appointments (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  company VARCHAR(255),
  address TEXT NOT NULL,
  postal_code VARCHAR(10) NOT NULL,
  city VARCHAR(100) NOT NULL,
  property_type VARCHAR(100) NOT NULL,
  surface_area INTEGER NOT NULL,
  appointment_date DATE NOT NULL,
  appointment_time TIME NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  comments TEXT
);

-- Insert some test data to verify the tables work
INSERT INTO quotes (name, email, phone, company, address, local_type, surface_area, interventions_per_week, estimated_price) 
VALUES ('Test Client', 'test@example.com', '0123456789', 'Test Company', '123 Test Street, Nice', 'Bureau', 100, 2, 250.00)
ON CONFLICT DO NOTHING;

INSERT INTO appointments (first_name, last_name, email, phone, company, address, postal_code, city, property_type, surface_area, appointment_date, appointment_time, comments)
VALUES ('Test', 'User', 'test@example.com', '0123456789', 'Test Company', '123 Test Street', '06000', 'Nice', 'Bureau', 200, '2024-02-01', '10:00', 'Test appointment')
ON CONFLICT DO NOTHING;
