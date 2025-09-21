import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 類型定義
export interface Profile {
  id: string
  username: string
  email: string
  created_at: string
  updated_at: string
}

export interface AuthUser {
  id: string
  email: string
  username: string
  createdAt: string
}