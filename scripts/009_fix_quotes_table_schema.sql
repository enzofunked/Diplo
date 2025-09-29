-- Drop the existing table if it exists with wrong schema
DROP TABLE IF EXISTS quotes;

-- Create the quotes table with the correct schema
CREATE TABLE quotes (
  id SERIAL PRIMARY KEY,
  client_name VARCHAR(255) NOT NULL,
  client_email VARCHAR(255) NOT NULL,
  client_phone VARCHAR(50),
  client_company VARCHAR(255),
  client_address TEXT NOT NULL,
  quote_details JSONB NOT NULL,
  total_amount DECIMAL(10,2) DEFAULT 0,
  status VARCHAR(50) DEFAULT 'pending',
  signature_data TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  equipment_ranges JSONB,
  gamme_entree_count INTEGER DEFAULT 0,
  gamme_milieu_count INTEGER DEFAULT 0,
  gamme_haut_count INTEGER DEFAULT 0,
  equipment_summary TEXT
);

-- Create indexes for better performance
CREATE INDEX idx_quotes_client_email ON quotes(client_email);
CREATE INDEX idx_quotes_created_at ON quotes(created_at);
CREATE INDEX idx_quotes_status ON quotes(status);

-- Insert some test data to verify the schema works
INSERT INTO quotes (
  client_name, client_email, client_phone, client_company, client_address,
  quote_details, total_amount, status
) VALUES (
  'Test Client', 'test@example.com', '0123456789', 'Test Company', '123 Test Street',
  '{"local_type": "test", "surface_area": 100}', 250.00, 'pending'
);

SELECT 'Table quotes created successfully with correct schema' as result;
