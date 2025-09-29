-- Update quotes table to add missing columns for signature functionality
ALTER TABLE public.quotes 
ADD COLUMN IF NOT EXISTS signed_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS signature_data_url TEXT,
ADD COLUMN IF NOT EXISTS pdf_url TEXT,
ADD COLUMN IF NOT EXISTS address TEXT;

-- Create additional indexes
CREATE INDEX IF NOT EXISTS quotes_signed_at_idx ON public.quotes(signed_at) WHERE signed_at IS NOT NULL;
