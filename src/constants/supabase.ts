import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "http://localhost:54321";
const supabase = createClient(SUPABASE_URL, import.meta.env.ANON_KEY);

export default supabase;
