-- Execute all table creation scripts in order

-- First, create the quotes table
CREATE TABLE IF NOT EXISTS public.quotes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Contact information
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  address TEXT,
  
  -- Estimation details
  local_type TEXT NOT NULL,
  surface_area INTEGER NOT NULL,
  interventions_per_week INTEGER NOT NULL,
  
  -- Hygiene products (stored as JSONB for flexibility)
  hygiene_products JSONB DEFAULT '{}',
  
  -- Photos (array of file names/URLs)
  photos TEXT[] DEFAULT '{}',
  
  -- Calculated price
  estimated_price DECIMAL(10,2),
  
  -- Status for tracking
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'quoted', 'closed')),
  
  -- Signature functionality
  signed_at TIMESTAMP WITH TIME ZONE,
  signature_data_url TEXT,
  pdf_url TEXT
);

-- Create the appointments table
CREATE TABLE IF NOT EXISTS public.appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Contact information
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  
  -- Address information
  address TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  city TEXT NOT NULL,
  
  -- Property details
  property_type TEXT NOT NULL,
  surface_area INTEGER NOT NULL,
  
  -- Appointment details
  appointment_date DATE NOT NULL,
  appointment_time TIME NOT NULL,
  
  -- Status and comments
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  comments TEXT
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS quotes_created_at_idx ON public.quotes(created_at DESC);
CREATE INDEX IF NOT EXISTS quotes_email_idx ON public.quotes(email);
CREATE INDEX IF NOT EXISTS quotes_status_idx ON public.quotes(status);
CREATE INDEX IF NOT EXISTS quotes_signed_at_idx ON public.quotes(signed_at) WHERE signed_at IS NOT NULL;

CREATE INDEX IF NOT EXISTS appointments_created_at_idx ON public.appointments(created_at DESC);
CREATE INDEX IF NOT EXISTS appointments_email_idx ON public.appointments(email);
CREATE INDEX IF NOT EXISTS appointments_date_idx ON public.appointments(appointment_date, appointment_time);
CREATE INDEX IF NOT EXISTS appointments_status_idx ON public.appointments(status);

-- Insert some sample data for testing
INSERT INTO quotes (name, email, phone, company, local_type, surface_area, interventions_per_week, estimated_price, status)
VALUES 
  ('Jean Dupont', 'jean.dupont@email.com', '0123456789', 'Entreprise ABC', 'Bureau', 100, 2, 250.00, 'pending'),
  ('Marie Martin', 'marie.martin@email.com', '0987654321', NULL, 'Commerce', 150, 3, 375.00, 'quoted')
ON CONFLICT DO NOTHING;

INSERT INTO appointments (first_name, last_name, email, phone, address, postal_code, city, property_type, surface_area, appointment_date, appointment_time, status)
VALUES 
  ('Pierre', 'Durand', 'pierre.durand@email.com', '0123456789', '123 Rue de la Paix', '06000', 'Nice', 'Bureau', 200, '2024-01-15', '10:00', 'pending'),
  ('Sophie', 'Bernard', 'sophie.bernard@email.com', '0987654321', '456 Avenue des Fleurs', '06100', 'Cannes', 'Commerce', 300, '2024-01-16', '14:30', 'confirmed')
ON CONFLICT DO NOTHING;
