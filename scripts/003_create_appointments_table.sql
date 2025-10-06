-- Create appointments table to store appointment requests
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

-- Enable Row Level Security (RLS)
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert appointments (for public form)
CREATE POLICY "Allow public appointment submission" ON public.appointments
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow reading appointments (you can restrict this later)
CREATE POLICY "Allow reading appointments" ON public.appointments
  FOR SELECT 
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS appointments_created_at_idx ON public.appointments(created_at DESC);
CREATE INDEX IF NOT EXISTS appointments_email_idx ON public.appointments(email);
CREATE INDEX IF NOT EXISTS appointments_date_idx ON public.appointments(appointment_date, appointment_time);
CREATE INDEX IF NOT EXISTS appointments_status_idx ON public.appointments(status);
