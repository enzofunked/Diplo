-- Insertion de données d'exemple avec des adresses réelles
INSERT INTO quotes (
    client_name, client_email, client_phone, client_company, client_address,
    quote_details, total_amount, status, signature_data, created_at
) VALUES 
(
    'Jean Dupont',
    'jean.dupont@email.com',
    '0123456789',
    'Entreprise ABC',
    '123 Rue de la Paix, 06000 Nice',
    '{"local_type": "bureaux", "surface_area": 100, "interventions_per_week": 2, "hygiene_products": {"diffuseurParfum": 1, "diffuseurParfumGamme": "entree", "distributeurSavon": 2, "distributeurSavonGamme": "milieu"}, "photos": []}',
    250.00,
    'pending',
    NULL,
    '2024-01-15 10:00:00'
),
(
    'Marie Martin',
    'marie.martin@email.com',
    '0987654321',
    'Commerce du Centre',
    '456 Avenue des Fleurs, 06100 Cannes',
    '{"local_type": "commerces", "surface_area": 150, "interventions_per_week": 3, "hygiene_products": {"secheMains": 1, "secheMainsGamme": "haut", "distributeurServiette": 2, "distributeurServietteGamme": "milieu"}, "photos": []}',
    375.00,
    'quoted',
    'data:image/png;base64,mock-signature',
    '2024-01-14 14:30:00'
),
(
    'Pierre Durand',
    'pierre.durand@sante.fr',
    '0456789123',
    'Clinique Azur',
    '789 Boulevard de la Santé, 06200 Nice',
    '{"local_type": "sante", "surface_area": 200, "interventions_per_week": 5, "hygiene_products": {"diffuseurParfum": 2, "diffuseurParfumGamme": "haut", "distributeurSavon": 4, "distributeurSavonGamme": "haut", "secheMains": 3, "secheMainsGamme": "haut"}, "photos": []}',
    650.00,
    'signed',
    NULL,
    '2024-01-13 09:15:00'
);

-- Vérification des données insérées
SELECT 
    id,
    client_name,
    client_company,
    client_address,
    total_amount,
    status,
    created_at
FROM quotes 
ORDER BY created_at DESC;
