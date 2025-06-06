import Password_validacion from '../password.js';

describe('Validación de contraseña segura (función correcta)', () => {
  test('Contraseña válida', () => {
    expect(Password_validacion('Playa2010@')).toBe(true);
  });

  test('Sin mayúsculas', () => {
    expect(Password_validacion('playa2010@')).toBe(false);
  });

  test('Sin minúsculas', () => {
    expect(Password_validacion('PLAYA2010@')).toBe(false);
  });

  test('Sin número', () => {
    expect(Password_validacion('Playa@@@A')).toBe(false);
  });

  test('Sin caracter especial', () => {
    expect(Password_validacion('Playa2010')).toBe(false);
  });

  test('Muy corta', () => {
    expect(Password_validacion('P1@a')).toBe(false);
  });

  test('Con espacios', () => {
    expect(Password_validacion('Playa 2010@')).toBe(false);
  });

  test('Sin palabra significativa', () => {
    expect(Password_validacion('Xyz2010@')).toBe(false);
  });

  test('Entrada vacía', () => {
    expect(Password_validacion('')).toBe(false);
  });

  test('Tipo incorrecto (número)', () => {
    expect(Password_validacion(12345678)).toBe(false);
  });
});
