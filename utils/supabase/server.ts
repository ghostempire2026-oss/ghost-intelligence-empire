import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export function createClient() {
  const cookieStore = cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_https://jjdzmmstvjeqycbejiuf.supabase.co,
    process.env.NEXT_PUBLIC_SUPABASE_,eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZHptbXN0dmplcXljYmVqaXVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2NzEyNzIsImV4cCI6MjA5MjI0NzI3Mn0.YSKDo-UPw2SAAvPNwbe1Z4YbjfsemFMYBb7NhiJyC6Q
    {
      cookies: {
        get: (name) => cookieStore.get(name)?.value,
      },
    }
  )
}