import { clientEnv } from "@/env/client";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ebkzcwooufgmcvtjxfiu.supabase.co";
const supabaseKey = clientEnv.NEXT_PUBLIC_SUPABASE_KEY;

export const supabaseClient = createClient(supabaseUrl, supabaseKey);
