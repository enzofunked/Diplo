-- Create quotes table with signature support
CREATE TABLE IF NOT EXISTS public.quotes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Contact information
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  
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
  
  -- Signature fields
  signed_at TIMESTAMP WITH TIME ZONE,
  signature_data_url TEXT,
  pdf_url TEXT
);

-- Create appointments table
CREATE TABLE IF NOT EXISTS public.appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Contact information
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  
  -- Address
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

-- Enable Row Level Security (RLS)
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public access (you can restrict this later)
CREATE POLICY "Allow public quote operations" ON public.quotes
  FOR ALL 
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow public appointment operations" ON public.appointments
  FOR ALL 
  USING (true)
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS quotes_created_at_idx ON public.quotes(created_at DESC);
CREATE INDEX IF NOT EXISTS quotes_email_idx ON public.quotes(email);
CREATE INDEX IF NOT EXISTS quotes_status_idx ON public.quotes(status);

CREATE INDEX IF NOT EXISTS appointments_created_at_idx ON public.appointments(created_at DESC);
CREATE INDEX IF NOT EXISTS appointments_date_idx ON public.appointments(appointment_date);
CREATE INDEX IF NOT EXISTS appointments_email_idx ON public.appointments(email);
