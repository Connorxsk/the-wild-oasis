import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zevpbgylkbmohnukrhuq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpldnBiZ3lsa2Jtb2hudWtyaHVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwNzY4NTQsImV4cCI6MjAzNzY1Mjg1NH0.n_Ay7tYFTBIZGt-cIG0a5x1AgSvsELlhafu4XaTXHV8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
