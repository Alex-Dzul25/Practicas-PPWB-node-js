import password_debil from '../password_debil.js';

describe('Validación débil de contraseña', () => {
  test('Solo longitud válida', () => {
    expect(password_debil('abcdefgh')).toBe(true); 
  });

  test('Contraseña fuerte', () => {
    expect(password_debil('Playa2010@')).toBe(true);
  });

  test('Demasiado corta', () => {
    expect(password_debil('abc')).toBe(false);
  });

  test('Tipo no string', () => {
    expect(password_debil(12345678)).toBe(false);
  });
});
