-- Recreating the complete quotes table with all necessary columns
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
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  -- Equipment ranges columns for better visibility
  equipment_ranges JSONB DEFAULT '{}',
  gamme_entree_count INTEGER DEFAULT 0,
  gamme_milieu_count INTEGER DEFAULT 0,
  gamme_haut_count INTEGER DEFAULT 0,
  equipment_summary TEXT
);

-- Create indexes for better performance
CREATE INDEX idx_quotes_status ON quotes(status);
CREATE INDEX idx_quotes_created_at ON quotes(created_at);
CREATE INDEX idx_quotes_client_email ON quotes(client_email);
CREATE INDEX idx_quotes_gamme_entree ON quotes(gamme_entree_count);
CREATE INDEX idx_quotes_gamme_milieu ON quotes(gamme_milieu_count);
CREATE INDEX idx_quotes_gamme_haut ON quotes(gamme_haut_count);

-- Insert sample data for testing
INSERT INTO quotes (
  client_name, client_email, client_phone, client_company, client_address,
  quote_details, total_amount, status, equipment_ranges, 
  gamme_entree_count, gamme_milieu_count, gamme_haut_count, equipment_summary
) VALUES 
(
  'Jean Dupont',
  'jean.dupont@email.com',
  '0123456789',
  'Entreprise ABC',
  '123 Rue de la Paix, 06000 Nice',
  '{"local_type": "bureaux", "surface_area": 100, "interventions_per_week": 2, "hygiene_products": {"savons": 2, "papierToilettes": 1, "savonsGamme": "entree", "papierToilettesGamme": "entree"}}',
  250.00,
  'pending',
  '{"entree": [{"name": "savons", "quantity": 2, "gamme": "entree"}, {"name": "papierToilettes", "quantity": 1, "gamme": "entree"}], "milieu": [], "haut": []}',
  3,
  0,
  0,
  'Entrée: savons(2), papierToilettes(1)'
),
(
  'Marie Martin',
  'marie.martin@email.com',
  '0987654321',
  'Commerce XYZ',
  '456 Avenue des Fleurs, 06100 Cannes',
  '{"local_type": "commerces", "surface_area": 150, "interventions_per_week": 3, "hygiene_products": {"distributeurSavon": 1, "secheMains": 1, "distributeurSavonGamme": "milieu", "secheMainsGamme": "haut"}}',
  375.00,
  'quoted',
  '{"entree": [], "milieu": [{"name": "distributeurSavon", "quantity": 1, "gamme": "milieu"}], "haut": [{"name": "secheMains", "quantity": 1, "gamme": "haut"}]}',
  0,
  1,
  1,
  'Milieu: distributeurSavon(1) | Haut: secheMains(1)'
);

-- Verify the table structure
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'quotes' 
ORDER BY ordinal_position;
