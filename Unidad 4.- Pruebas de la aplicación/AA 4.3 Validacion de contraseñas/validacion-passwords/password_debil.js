import password from "./password";

function password_debil(password) {
  if (typeof password !== 'string') return false;
  return password.length >= 8;
}

export default password_debil;
