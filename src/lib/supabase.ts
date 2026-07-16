import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  "https://xtsgzdccvdqaqchfgrdk.supabase.co";

const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0c2d6ZGNjdmRxYXFjaGZncmRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwOTU4NjIsImV4cCI6MjA5OTY3MTg2Mn0.oRxSIJr8IVAglRmyrpi2QfE-HnuEe2BuLNCAcgrhxm0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
