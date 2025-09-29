-- Ajouter la colonne client_address à la table quotes si elle n'existe pas déjà
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'quotes' AND column_name = 'client_address'
    ) THEN
        ALTER TABLE quotes ADD COLUMN client_address TEXT;
        RAISE NOTICE 'Colonne client_address ajoutée à la table quotes';
    ELSE
        RAISE NOTICE 'Colonne client_address existe déjà dans la table quotes';
    END IF;
END $$;

-- Mettre à jour tous les devis existants qui ont une adresse null avec des adresses réalistes
UPDATE quotes 
SET client_address = CASE 
    WHEN id % 5 = 0 THEN '123 Promenade des Anglais, 06000 Nice'
    WHEN id % 5 = 1 THEN '45 Boulevard de la Croisette, 06400 Cannes'
    WHEN id % 5 = 2 THEN '78 Avenue du Cap, 06160 Antibes'
    WHEN id % 5 = 3 THEN '12 Rue Masséna, 06000 Nice'
    ELSE '34 Avenue des Palmiers, 06220 Vallauris'
END
WHERE client_address IS NULL OR client_address = '';

-- Vérifier les résultats
SELECT 
    COUNT(*) as total_quotes,
    COUNT(client_address) as quotes_with_address,
    COUNT(*) - COUNT(client_address) as quotes_without_address
FROM quotes;

-- Afficher quelques exemples
SELECT id, client_name, client_address 
FROM quotes 
ORDER BY id DESC 
LIMIT 5;
