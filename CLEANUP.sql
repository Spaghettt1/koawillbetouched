-- Hideout Database Cleanup Script
-- Run this to remove unnecessary data and optimize the database

-- 1. Clean up old chat messages (keep only last 100)
DELETE FROM global_chat 
WHERE id NOT IN (
  SELECT id FROM global_chat 
  ORDER BY created_at DESC 
  LIMIT 100
);

-- 2. Clean up orphaned favorites (where game/app no longer exists in data files)
-- Note: This requires manual verification of your games.json and apps.json files

-- 3. Clean up inactive user data (users not logged in for 2+ weeks)
-- This should already be handled by the delete-inactive-users edge function
-- But you can manually run it with:
-- DELETE FROM users WHERE last_activity < NOW() - INTERVAL '14 days';

-- 4. Vacuum and analyze tables for better performance
VACUUM ANALYZE global_chat;
VACUUM ANALYZE favorites;
VACUUM ANALYZE users;
VACUUM ANALYZE user_data;

-- 5. Optional: Clear all browser history older than 30 days from user_data table
-- UPDATE user_data 
-- SET local_storage = jsonb_set(
--   COALESCE(local_storage, '{}'::jsonb),
--   '{hideout_browser_history}',
--   '[]'::jsonb
-- )
-- WHERE updated_at < NOW() - INTERVAL '30 days';

-- Notes:
-- - The delete-inactive-users edge function runs automatically
-- - Chat messages are auto-limited to 100 in the application code
-- - Browser data is managed per-user and syncs automatically
-- - Favorites are cleaned up when users are deleted (CASCADE)
