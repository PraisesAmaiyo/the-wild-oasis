import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://qdncjhfkrdkiccfdbvky.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkbmNqaGZrcmRraWNjZmRidmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQxNDM0OTIsImV4cCI6MjAyOTcxOTQ5Mn0.obcQyLvPS8oRkBCSulU9WKKVfcjauG6nGoTECi8K5I4';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
