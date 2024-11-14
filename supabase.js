import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fsgkqhwtrwpefucjbezx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzZ2txaHd0cndwZWZ1Y2piZXp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxMTMwNTYsImV4cCI6MjA0NTY4OTA1Nn0.hrd6LGLAGQCvMYPF5aOz-jWs7LbbG1CFKo_VLd54YVE'
export const supabase = createClient(supabaseUrl, supabaseKey)