-- Créer la table quotes avec le schéma complet incluant client_address
DROP TABLE IF EXISTS quotes;

CREATE TABLE quotes (
    id SERIAL PRIMARY KEY,
    client_name VARCHAR(255) NOT NULL,
    client_email VARCHAR(255) NOT NULL,
    client_phone VARCHAR(50),
    client_company VARCHAR(255),
    client_address TEXT, -- Ajout du champ adresse
    service_type VARCHAR(100) NOT NULL,
    surface_area INTEGER,
    frequency VARCHAR(50),
    estimated_price DECIMAL(10,2),
    hygiene_products JSONB,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insérer des données de test avec des adresses réelles
INSERT INTO quotes (
    client_name, 
    client_email, 
    client_phone, 
    client_company, 
    client_address, 
    service_type, 
    surface_area, 
    frequency, 
    estimated_price, 
    hygiene_products, 
    status
) VALUES 
(
    'Jean Dupont',
    'jean.dupont@example.com',
    '06 12 34 56 78',
    'Restaurant Le Soleil',
    '15 Avenue Jean Médecin, 06000 Nice', -- Adresse réelle
    'nettoyage-restaurant',
    150,
    'quotidien',
    850.00,
    '{"savons": 2, "distributeurSavon": 2, "secheMains": 1, "gammeStandard": true}',
    'pending'
),
(
    'Marie Martin',
    'marie.martin@hotel-azur.fr',
    '04 93 87 65 43',
    'Hôtel Azur Palace',
    '45 Boulevard de la Croisette, 06400 Cannes', -- Adresse réelle
    'nettoyage-hotel',
    500,
    'quotidien',
    1200.00,
    '{"savons": 5, "distributeurSavon": 5, "secheMains": 3, "secheServiette": 2, "gammePremium": true}',
    'accepted'
),
(
    'Pierre Moreau',
    'p.moreau@clinique-riviera.fr',
    '04 92 15 78 90',
    'Clinique de la Riviera',
    '28 Rue de France, 06000 Nice', -- Adresse réelle
    'nettoyage-medical',
    300,
    'quotidien',
    950.00,
    '{"savons": 3, "distributeurSavon": 3, "secheMains": 2, "diffuseurParfum": 1, "gammeHygiene": true}',
    'pending'
),
(
    'Sophie Blanc',
    'sophie.blanc@bureau-azur.com',
    '04 93 44 22 11',
    'Bureau Azur Consulting',
    '12 Promenade des Anglais, 06000 Nice', -- Adresse réelle
    'nettoyage-bureau',
    200,
    'hebdomadaire',
    400.00,
    '{"savons": 1, "distributeurSavon": 1, "secheMains": 1, "gammeStandard": true}',
    'pending'
);

-- Vérifier que les données ont été insérées avec les adresses
SELECT id, client_name, client_company, client_address, service_type, estimated_price 
FROM quotes 
ORDER BY created_at DESC;
