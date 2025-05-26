const suma = require('./suma');

// 1. La expectativa espera que la suma sea igual a 20 con toBe
test('suma 10 + 10 es igual a 20', () => {
  expect(suma(10, 10)).toBe(20);
});

// 2. Comparación de objetos con toEqual
test('La persona 1 es igual a la persona 2', () => {
  const persona1 = { nombre: 'Alex', edad: 21 };
  const persona2 = { nombre: 'Alex', edad: 21 };
  expect(persona1).toEqual(persona2);
});

// 3. Verificación de valores nulos, indefinidos y definidos
test('Variable nula', () => {
  const n = null;
  expect(n).toBeNull();
});

test('Variable indefinido', () => {
  const n = undefined;
  expect(n).toBeUndefined();
});

test('Variable definida', () => {
  const n = 'Hola';
  expect(n).toBeDefined();
});

// 4. Comparaciones numéricas
test('El número 15 es mayor que 10', () => {
  const numero = 15;
  expect(numero).toBeGreaterThan(10);
});

test('El número 2 es menor que 4', () => {
  const numero = 2;
  expect(numero).toBeLessThan(4);
});

test('El número 15 es mayor o igual que 15', () => {
  const numero = 15;
  expect(numero).toBeGreaterThanOrEqual(15);
});

// 5. Coincidencia de cadenas con expresiones regulares
test('"mundo" existe en el mensaje "Hola mundo"', () => {
  const mensaje = 'Hola mundo';
  expect(mensaje).toMatch(/mundo/);
});

// 6. Verificación de contenido en arrays con toContain
test('El array contiene un elemento "moto"', () => {
  const transporte = ['triciclo', 'moto', 'carro'];
  expect(transporte).toContain('moto');
});

// 7. Negación de matchers con .not
test('5 no es igual a 10', () => {
  expect(5).not.toBe(10);
});

// 8. Esperar una promesa con async y await
test('La suma esperada es igual a 5', async () => {
  const data = await suma(2, 3);
  expect(data).toBe(5);
});
