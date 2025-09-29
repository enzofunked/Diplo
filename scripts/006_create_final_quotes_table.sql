-- Creating the correct quotes table schema that matches the API expectations
DROP TABLE IF EXISTS quotes CASCADE;

CREATE TABLE quotes (
  id SERIAL PRIMARY KEY,
  client_name VARCHAR(255) NOT NULL,
  client_email VARCHAR(255) NOT NULL,
  client_phone VARCHAR(50) NOT NULL,
  client_company VARCHAR(255),
  client_address TEXT NOT NULL,
  quote_details JSONB NOT NULL DEFAULT '{}',
  total_amount DECIMAL(10,2) NOT NULL DEFAULT 0,
  status VARCHAR(50) NOT NULL DEFAULT 'pending',
  signature_data TEXT,
  pdf_url TEXT,
  signed_at TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for better performance
CREATE INDEX idx_quotes_status ON quotes(status);
CREATE INDEX idx_quotes_created_at ON quotes(created_at);
CREATE INDEX idx_quotes_client_email ON quotes(client_email);

-- Insert sample data for testing
INSERT INTO quotes (
  client_name, client_email, client_phone, client_company, client_address,
  quote_details, total_amount, status
) VALUES 
(
  'Jean Dupont',
  'jean.dupont@email.com',
  '0123456789',
  'Entreprise ABC',
  '123 Rue de la Paix, 06000 Nice',
  '{"local_type": "bureaux", "surface_area": 100, "interventions_per_week": 2, "hygiene_products": {"savons": 2, "papierToilettes": 1}}',
  250.00,
  'pending'
),
(
  'Marie Martin',
  'marie.martin@email.com',
  '0987654321',
  'Commerce XYZ',
  '456 Avenue des Fleurs, 06100 Cannes',
  '{"local_type": "commerces", "surface_area": 150, "interventions_per_week": 3, "hygiene_products": {"distributeurSavon": 1, "secheMains": 1}}',
  375.00,
  'quoted'
);
