-- Update any existing quotes that might have null addresses with sample addresses
-- This script handles the case where quotes already exist but don't have addresses

UPDATE quotes 
SET client_address = CASE 
    WHEN client_name LIKE '%test%' OR client_name LIKE '%Test%' THEN '123 Rue de Test, 06000 Nice'
    WHEN client_name LIKE '%admin%' OR client_name LIKE '%Admin%' THEN '456 Avenue Admin, 06100 Cannes'
    WHEN client_company IS NOT NULL THEN CONCAT(client_company, ' - Adresse non renseignée lors de la création')
    ELSE CONCAT('Adresse de ', client_name, ' - À compléter')
END
WHERE client_address IS NULL OR client_address = '';

-- Show updated records
SELECT id, client_name, client_address FROM quotes WHERE client_address IS NOT NULL;
