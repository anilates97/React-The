import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://arcgjuncuzbuigzfvdko.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyY2dqdW5jdXpidWlnemZ2ZGtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1ODA0MTEsImV4cCI6MjAxNTE1NjQxMX0.zWaveADlzyBIh1T_3VUGJewSpBOCFIzTuTp9r4DrWac";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
