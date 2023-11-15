import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nqvrdqkjudlpnnhxrfpr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xdnJkcWtqdWRscG5uaHhyZnByIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1MTIwOTksImV4cCI6MjAxNTA4ODA5OX0.563Iv17vpd5cbB9U_0hC4Y1RPHH6X-aC7l2nuzA8WnI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
