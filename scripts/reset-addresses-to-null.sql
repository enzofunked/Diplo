-- Supprimer les adresses factices et remettre à null pour que les vraies adresses des clients s'affichent
UPDATE quotes 
SET client_address = NULL 
WHERE client_address IN (
  '78 Promenade des Anglais, 06000 Nice',
  '15 Boulevard de la Croisette, 06400 Cannes',
  '22 Avenue du Général de Gaulle, 06600 Antibes',
  '8 Rue Masséna, 06000 Nice',
  '45 Avenue des Palmiers, 06400 Cannes'
);

-- Vérifier les résultats
SELECT id, client_name, client_address, created_at 
FROM quotes 
ORDER BY created_at DESC 
LIMIT 10;
