import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.GATSBY_SUPABASE_URL,
  process.env.GATSBY_SUPABASE_ANON_KEY
);

export async function handler(event) {
  try {
    const { question } = JSON.parse(event.body);
    if (!question?.trim()) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Question is required' }),
      };
    }

    const { data, error } = await supabase
      .from('questions')
      .insert([{ question: question.trim() }])
      .select()
      .single();

    if (error) throw error;

    return {
      statusCode: 200,
      body: JSON.stringify({ data }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
