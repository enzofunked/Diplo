-- Create storage bucket for quote photos
INSERT INTO storage.buckets (id, name, public) VALUES ('quote-photos', 'quote-photos', true);

-- Set up RLS policies for the bucket
CREATE POLICY "Anyone can upload quote photos" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'quote-photos');
CREATE POLICY "Anyone can view quote photos" ON storage.objects FOR SELECT USING (bucket_id = 'quote-photos');
