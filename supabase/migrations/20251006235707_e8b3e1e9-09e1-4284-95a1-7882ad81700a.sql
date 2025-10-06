-- Clean up orphaned chat messages first
DELETE FROM public.global_chat
WHERE user_id NOT IN (SELECT id FROM public.users);

-- Fix favorites table schema (rename game_id to game_name)
ALTER TABLE public.favorites 
RENAME COLUMN game_id TO game_name;

-- Update users table RLS - Make it secure
DROP POLICY IF EXISTS "Users can manage their own data" ON public.users;

CREATE POLICY "Users can read their own data"
ON public.users
FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Users can update their own data"
ON public.users
FOR UPDATE
USING (auth.uid() = id);

CREATE POLICY "Users can delete their own data"
ON public.users
FOR DELETE
USING (auth.uid() = id);

-- Fix global_chat foreign key to use users table
ALTER TABLE public.global_chat
DROP CONSTRAINT IF EXISTS global_chat_user_id_fkey;

ALTER TABLE public.global_chat
ADD CONSTRAINT global_chat_user_id_fkey
FOREIGN KEY (user_id)
REFERENCES public.users(id)
ON DELETE CASCADE;

-- Ensure realtime is enabled for global_chat
ALTER TABLE public.global_chat REPLICA IDENTITY FULL;

-- Add to realtime publication if not already added
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' 
    AND tablename = 'global_chat'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.global_chat;
  END IF;
END $$;