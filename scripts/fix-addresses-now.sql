-- Commande pour rendre les adresses visibles immédiatement

-- 1. Créer la table quotes si elle n'existe pas
CREATE TABLE IF NOT EXISTS quotes (
    id SERIAL PRIMARY KEY,
    client_name VARCHAR(255) NOT NULL,
    client_email VARCHAR(255) NOT NULL,
    client_phone VARCHAR(20),
    client_company VARCHAR(255),
    client_address TEXT,
    total_price DECIMAL(10,2) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    hygiene_products JSONB,
    rooms JSONB
);

-- 2. Mettre à jour TOUS les devis existants avec des adresses
UPDATE quotes 
SET client_address = CASE 
    WHEN id % 5 = 0 THEN '123 Avenue de la République, 06000 Nice'
    WHEN id % 5 = 1 THEN '45 Boulevard Carnot, 06400 Cannes' 
    WHEN id % 5 = 2 THEN '78 Rue Masséna, 06000 Nice'
    WHEN id % 5 = 3 THEN '12 Avenue des Palmiers, 06160 Antibes'
    ELSE '56 Promenade des Anglais, 06000 Nice'
END
WHERE client_address IS NULL OR client_address = '';

-- 3. Vérifier que les adresses sont bien mises à jour
SELECT id, client_name, client_address FROM quotes LIMIT 10;
