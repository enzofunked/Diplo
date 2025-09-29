-- Drop existing quotes table if it exists (to recreate with correct schema)
DROP TABLE IF EXISTS public.quotes CASCADE;

-- Create quotes table with columns that match the API
CREATE TABLE IF NOT EXISTS public.quotes (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Client information (matching API column names)
  client_name TEXT NOT NULL,
  client_email TEXT NOT NULL,
  client_phone TEXT,
  client_company TEXT,
  client_address TEXT,
  
  -- Quote details (stored as JSONB for flexibility)
  quote_details JSONB DEFAULT '{}',
  
  -- Calculated price
  total_amount DECIMAL(10,2),
  
  -- Status and signature
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'quoted', 'closed')),
  signature_data TEXT,
  signed_at TIMESTAMP WITH TIME ZONE,
  pdf_url TEXT
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
CREATE INDEX IF NOT EXISTS quotes_client_email_idx ON public.quotes(client_email);
CREATE INDEX IF NOT EXISTS quotes_status_idx ON public.quotes(status);
