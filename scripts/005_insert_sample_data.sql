-- Insert sample quotes data
INSERT INTO public.quotes (
  client_name, client_email, client_phone, client_company, client_address,
  quote_details, total_amount, status
) VALUES 
(
  'Jean Dupont', 
  'jean.dupont@email.com', 
  '0123456789', 
  'Entreprise ABC', 
  '123 Rue de la Paix, 06000 Nice',
  '{"local_type": "Bureau", "surface_area": 100, "interventions_per_week": 2, "hygiene_products": {}, "photos": []}',
  250.00,
  'pending'
),
(
  'Marie Martin', 
  'marie.martin@email.com', 
  '0987654321', 
  NULL, 
  '456 Avenue des Fleurs, 06100 Cannes',
  '{"local_type": "Commerce", "surface_area": 150, "interventions_per_week": 3, "hygiene_products": {}, "photos": []}',
  375.00,
  'quoted'
);

-- Insert sample appointments data
INSERT INTO public.appointments (
  first_name, last_name, email, phone, company, address, postal_code, city,
  property_type, surface_area, appointment_date, appointment_time, status, comments
) VALUES 
(
  'Pierre', 'Durand', 'pierre.durand@email.com', '0123456789', 'Tech Solutions',
  '123 Rue de la Paix', '06000', 'Nice', 'Bureau', 200,
  '2024-01-20', '10:00', 'pending', 'Première visite pour évaluation'
),
(
  'Sophie', 'Bernard', 'sophie.bernard@email.com', '0987654321', NULL,
  '456 Avenue des Fleurs', '06100', 'Cannes', 'Commerce', 300,
  '2024-01-22', '14:30', 'confirmed', NULL
);
