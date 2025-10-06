-- Create appointments table with columns that match the API
CREATE TABLE IF NOT EXISTS public.appointments (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Client information
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  
  -- Address information
  address TEXT,
  postal_code TEXT,
  city TEXT,
  
  -- Property information
  property_type TEXT,
  surface_area INTEGER,
  
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

-- Create index for better performance
CREATE INDEX IF NOT EXISTS appointments_created_at_idx ON public.appointments(created_at DESC);
CREATE INDEX IF NOT EXISTS appointments_email_idx ON public.appointments(email);
CREATE INDEX IF NOT EXISTS appointments_date_time_idx ON public.appointments(appointment_date, appointment_time);
CREATE INDEX IF NOT EXISTS appointments_status_idx ON public.appointments(status);
