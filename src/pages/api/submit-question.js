import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { question } = req.body;

  if (!question || typeof question !== 'string' || !question.trim()) {
    return res.status(400).json({ error: 'Invalid question' });
  }

  const { data, error } = await supabase
    .from('questions')
    .insert([{ question: question.trim() }]);

  if (error) {
    console.error('Insert failed:', error);
    return res.status(500).json({ error: 'Insert failed' });
  }

  return res.status(200).json({ data });
}
