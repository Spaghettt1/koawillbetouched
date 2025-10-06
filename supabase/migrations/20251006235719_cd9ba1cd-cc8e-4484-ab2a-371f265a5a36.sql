-- Fix search_path for all functions
ALTER FUNCTION public.generate_username(uuid) SET search_path = public;
ALTER FUNCTION public.handle_new_user() SET search_path = public;
ALTER FUNCTION public.update_browser_data_updated_at() SET search_path = public;