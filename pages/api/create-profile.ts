import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { userId, username, email } = req.body;
  if (!userId || !username || !email) return res.status(400).json({ error: 'Missing data' });

  const { error } = await supabaseAdmin.from('profiles').insert([{
    id: userId,
    username,
    email,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }]);
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json({ success: true });
}
