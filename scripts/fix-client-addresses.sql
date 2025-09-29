-- Script pour corriger les adresses manquantes des clients
-- Ce script met à jour les adresses null avec des adresses par défaut basées sur les informations existantes

UPDATE quotes 
SET client_address = CASE 
    WHEN client_company IS NOT NULL AND client_company != '' 
    THEN client_company || ', Adresse à préciser'
    ELSE 'Adresse des locaux à préciser'
END
WHERE client_address IS NULL OR client_address = '';

-- Vérification des résultats
SELECT 
    id,
    client_name,
    client_company,
    client_address,
    created_at
FROM quotes 
ORDER BY created_at DESC 
LIMIT 10;
