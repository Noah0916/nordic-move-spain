import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://cjcouuludujxblaonfpf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqY291dWx1ZHVqeGJsYW9uZnBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2OTgxMDYsImV4cCI6MjA5NjI3NDEwNn0.klDa77wyo_Zmf9e0p3DgsnIGusrOCS1km2bNzuBWViE"
);