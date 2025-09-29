-- Create quotes table with proper schema including client_address
CREATE TABLE IF NOT EXISTS quotes (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    client_name VARCHAR(255) NOT NULL,
    client_email VARCHAR(255) NOT NULL,
    client_phone VARCHAR(50) NOT NULL,
    client_company VARCHAR(255),
    client_address TEXT NOT NULL, -- Made address required
    quote_details JSONB NOT NULL,
    total_amount DECIMAL(10,2),
    status VARCHAR(50) DEFAULT 'pending',
    signed_at TIMESTAMP WITH TIME ZONE,
    signature_data TEXT,
    pdf_url TEXT
);

-- Insert sample quotes with real addresses for testing
INSERT INTO quotes (
    client_name, 
    client_email, 
    client_phone, 
    client_company, 
    client_address,
    quote_details, 
    total_amount, 
    status
) VALUES 
(
    'Jean Dupont',
    'jean.dupont@example.com',
    '0123456789',
    'Entreprise ABC',
    '123 Rue de la République, 06000 Nice',
    '{"local_type": "bureaux", "surface_area": 150, "interventions_per_week": 3, "estimated_price": 450, "hygiene_products": {"savons": 2, "distributeurSavon": 1, "distributeurSavonGamme": "milieu"}}',
    450.00,
    'pending'
),
(
    'Marie Martin',
    'marie.martin@commerce.fr',
    '0987654321',
    'Commerce Martin',
    '45 Avenue des Fleurs, 06100 Cannes',
    '{"local_type": "commerces", "surface_area": 80, "interventions_per_week": 5, "estimated_price": 320, "hygiene_products": {"diffuseurParfum": 1, "diffuseurParfumGamme": "haut", "distributeurServiette": 2}}',
    320.00,
    'contacted'
),
(
    'Pierre Durand',
    'p.durand@hotel-azur.com',
    '0456789123',
    'Hôtel Azur',
    '78 Boulevard de la Croisette, 06400 Cannes',
    '{"local_type": "hotels", "surface_area": 300, "interventions_per_week": 6, "estimated_price": 1200, "hygiene_products": {"secheMains": 3, "secheMainsGamme": "haut", "savons": 5, "papierToilettes": 8}}',
    1200.00,
    'quoted'
);

-- Verify the data was inserted correctly
SELECT id, client_name, client_address, total_amount FROM quotes;
