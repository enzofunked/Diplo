-- Création de la table quotes avec tous les champs nécessaires
CREATE TABLE IF NOT EXISTS quotes (
    id SERIAL PRIMARY KEY,
    client_name VARCHAR(255) NOT NULL,
    client_email VARCHAR(255) NOT NULL,
    client_phone VARCHAR(50) NOT NULL,
    client_company VARCHAR(255),
    client_address TEXT NOT NULL, -- Champ adresse obligatoire
    quote_details JSONB NOT NULL,
    total_amount DECIMAL(10,2) DEFAULT 0,
    status VARCHAR(50) DEFAULT 'pending',
    signature_data TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_quotes_created_at ON quotes(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quotes_status ON quotes(status);
CREATE INDEX IF NOT EXISTS idx_quotes_client_email ON quotes(client_email);

-- Vérification de la structure de la table
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'quotes' 
ORDER BY ordinal_position;
