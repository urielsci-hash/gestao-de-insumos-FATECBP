import { supabase } from './supabase.js';
export async function requireAuth() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) { window.location.href = 'index.html'; return null; }
  return session;
}
export async function requireAdmin() {
  const session = await requireAuth();
  if (!session) return null;
  const isAdmin = session.user.user_metadata?.perfil === 'admin';
  if (!isAdmin) { window.location.href = 'painel.html'; return null; }
  return session;
}
export async function getPerfil() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return null;
  return session.user.user_metadata?.perfil || 'solicitante';
}
export async function logout() {
  await supabase.auth.signOut();
  window.location.href = 'index.html';
}
