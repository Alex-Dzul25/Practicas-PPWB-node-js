function password(password) {
  if (typeof password !== 'string') return false;
  if (password.length < 8) return false;
  if (!/[A-Z]/.test(password)) return false;
  if (!/[a-z]/.test(password)) return false;
  if (!/[0-9]/.test(password)) return false;
  if (!/[!@#$%^&*()]/.test(password)) return false;
  if (/\s/.test(password)) return false;

  const palabrasSignificativas = ['Playa', 'Carrillo', 'Mascota'];
  if (!palabrasSignificativas.some(p => password.includes(p))) return false;

  return true;
}

export default password;
