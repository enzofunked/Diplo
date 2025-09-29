-- Mettre à jour les adresses des devis existants
UPDATE quotes 
SET client_address = CASE 
    WHEN id % 5 = 0 THEN '123 Avenue de la République, 06000 Nice'
    WHEN id % 5 = 1 THEN '45 Boulevard Carnot, 06400 Cannes' 
    WHEN id % 5 = 2 THEN '78 Rue Masséna, 06000 Nice'
    WHEN id % 5 = 3 THEN '12 Avenue des Palmiers, 06160 Antibes'
    ELSE '56 Promenade des Anglais, 06000 Nice'
END
WHERE client_address IS NULL OR client_address = '';

-- Vérifier les résultats
SELECT id, client_name, client_address FROM quotes LIMIT 10;
