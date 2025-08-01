// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://hecyffkamvbqdcdxmvpg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlY3lmZmthbXZicWRjZHhtdnBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyNDE4MjEsImV4cCI6MjA2ODgxNzgyMX0.5iiSWUB35rhhDoFG87zK3Cj7kdWtcebp8ODr145P-1s";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});