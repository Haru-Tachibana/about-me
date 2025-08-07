import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.GATSBY_SUPABASE_URL;
const supabaseAnonKey = process.env.GATSBY_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase env variables: GATSBY_SUPABASE_URL and/or GATSBY_SUPABASE_ANON_KEY');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);