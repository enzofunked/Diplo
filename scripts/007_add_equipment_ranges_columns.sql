-- Ajouter des colonnes pour rendre les gammes d'équipements plus visibles dans Neon
-- Cela permettra de voir facilement les gammes "entrée", "milieu", "haut" pour chaque équipement

ALTER TABLE quotes ADD COLUMN IF NOT EXISTS equipment_ranges JSONB;
ALTER TABLE quotes ADD COLUMN IF NOT EXISTS gamme_entree_count INTEGER DEFAULT 0;
ALTER TABLE quotes ADD COLUMN IF NOT EXISTS gamme_milieu_count INTEGER DEFAULT 0;
ALTER TABLE quotes ADD COLUMN IF NOT EXISTS gamme_haut_count INTEGER DEFAULT 0;
ALTER TABLE quotes ADD COLUMN IF NOT EXISTS equipment_summary TEXT;

-- Créer un index pour améliorer les performances des requêtes sur les gammes
CREATE INDEX IF NOT EXISTS idx_quotes_equipment_ranges ON quotes USING GIN (equipment_ranges);
CREATE INDEX IF NOT EXISTS idx_quotes_gamme_entree ON quotes (gamme_entree_count);
CREATE INDEX IF NOT EXISTS idx_quotes_gamme_milieu ON quotes (gamme_milieu_count);
CREATE INDEX IF NOT EXISTS idx_quotes_gamme_haut ON quotes (gamme_haut_count);

-- Commentaires pour expliquer les colonnes
COMMENT ON COLUMN quotes.equipment_ranges IS 'Détail des équipements par gamme (entrée, milieu, haut)';
COMMENT ON COLUMN quotes.gamme_entree_count IS 'Nombre total d''équipements gamme entrée';
COMMENT ON COLUMN quotes.gamme_milieu_count IS 'Nombre total d''équipements gamme milieu';
COMMENT ON COLUMN quotes.gamme_haut_count IS 'Nombre total d''équipements gamme haut';
COMMENT ON COLUMN quotes.equipment_summary IS 'Résumé lisible des équipements et gammes';
