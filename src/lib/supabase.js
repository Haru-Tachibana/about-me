import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jtipezfehpfubkjbgrpl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0aXBlemZlaHBmdWJramJncnBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1Mzk4NjAsImV4cCI6MjA3MDExNTg2MH0.ZLRh9ItAEfm-zIaKN8UMEaktDjuNYx-ZH8mexF6wBYs';

export const supabase = createClient(supabaseUrl, supabaseKey);