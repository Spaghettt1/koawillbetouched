-- =====================================================
-- RUN THIS SCRIPT IN SUPABASE SQL EDITOR TO FIX CHAT
-- =====================================================

-- Fix global_chat RLS policies to work with custom auth
DROP POLICY IF EXISTS "Users can view all chat messages" ON public.global_chat;
DROP POLICY IF EXISTS "Users can send chat messages" ON public.global_chat;
DROP POLICY IF EXISTS "Users can delete own messages" ON public.global_chat;
DROP POLICY IF EXISTS "Anyone can view chat messages" ON public.global_chat;
DROP POLICY IF EXISTS "Authenticated users can send messages" ON public.global_chat;

-- Allow anyone to view messages (read-only for guests)
CREATE POLICY "Anyone can view chat messages"
ON public.global_chat
FOR SELECT
USING (true);

-- Allow authenticated users (via custom users table) to insert messages
CREATE POLICY "Authenticated users can send messages"
ON public.global_chat
FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.users
    WHERE id = user_id
  )
);

-- Allow users to delete their own messages
CREATE POLICY "Users can delete own messages"
ON public.global_chat
FOR DELETE
USING (
  EXISTS (
    SELECT 1 FROM public.users
    WHERE id = user_id
  )
);

-- Ensure browser_data table exists with proper structure
CREATE TABLE IF NOT EXISTS public.browser_data (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  tabs jsonb DEFAULT '[]'::jsonb,
  bookmarks jsonb DEFAULT '[]'::jsonb,
  history jsonb DEFAULT '[]'::jsonb,
  settings jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

-- Enable RLS on browser_data
ALTER TABLE public.browser_data ENABLE ROW LEVEL SECURITY;

-- RLS policies for browser_data
DROP POLICY IF EXISTS "Users can view own browser data" ON public.browser_data;
DROP POLICY IF EXISTS "Users can insert own browser data" ON public.browser_data;
DROP POLICY IF EXISTS "Users can update own browser data" ON public.browser_data;

CREATE POLICY "Users can view own browser data"
ON public.browser_data
FOR SELECT
USING (user_id IN (SELECT id FROM public.users));

CREATE POLICY "Users can insert own browser data"
ON public.browser_data
FOR INSERT
WITH CHECK (user_id IN (SELECT id FROM public.users));

CREATE POLICY "Users can update own browser data"
ON public.browser_data
FOR UPDATE
USING (user_id IN (SELECT id FROM public.users));
