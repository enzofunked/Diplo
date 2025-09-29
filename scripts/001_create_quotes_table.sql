-- Create quotes table to store estimation requests
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
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'quoted', 'closed'))
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert quotes (for public form)
CREATE POLICY "Allow public quote submission" ON public.quotes
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow reading quotes (you can restrict this later)
CREATE POLICY "Allow reading quotes" ON public.quotes
  FOR SELECT 
  USING (true);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS quotes_created_at_idx ON public.quotes(created_at DESC);
CREATE INDEX IF NOT EXISTS quotes_email_idx ON public.quotes(email);
CREATE INDEX IF NOT EXISTS quotes_status_idx ON public.quotes(status);
