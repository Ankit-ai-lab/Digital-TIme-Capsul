// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gxkgfnxrpzwkbomqnbqb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4a2dmbnhycHp3a2JvbXFuYnFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI5MTU1MDcsImV4cCI6MjA2ODQ5MTUwN30.S882LDbYPrkSLPFLU7HLi-IMkcZEVAvblNYnNki1IvI'

export const supabase = createClient(supabaseUrl, supabaseKey)


