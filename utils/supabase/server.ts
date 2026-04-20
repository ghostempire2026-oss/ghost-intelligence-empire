'use client'

import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,sb_publishable_Ch8ohr8C7pStmEpN3sAkWw_3jMqz9t-
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZHptbXN0dmplcXljYmVqaXVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2NzEyNzIsImV4cCI6MjA5MjI0NzI3Mn0.YSKDo-UPw2SAAvPNwbe1Z4YbjfsemFMYBb7NhiJyC6Q
  )
}