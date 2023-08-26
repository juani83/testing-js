const {
  sum, multiply, divide, promedio,
} = require('./02-math');

describe('Test for math', () => {
  describe('tests for sum', () => {
    test('adds 1 + 3 should be 4', () => {
      const rta = sum(1, 3);
      expect(rta).toBe(4);
    });
  });
  describe('test for multiply', () => {
    test('multiply 2 * 3 should be 6', () => {
      const rta = multiply(2, 3);
      expect(rta).toBe(6);
    });
  });
  describe('test for divide', () => {
    test('should divide', () => {
      const rta = divide(10, 2);
      expect(rta).toBe(5);

      const rta1 = divide(12, 3);
      expect(rta1).toBe(4);

      const rta2 = divide(5, 2);
      expect(rta2).toBe(2.5);

      const rta3 = divide(5, 0);
      expect(rta3).toBeNull();
    });
  });
  test('promedio', () => {
    const rta = promedio(10, 2);
    expect(rta).toBe(6);

    const rta1 = promedio(12, 3);
    expect(rta1).toBe(7.5);

    const rta2 = promedio(5, 2);
    expect(rta2).toBe(3.5);

    const rta3 = promedio(5, 0);
    expect(rta3).toBe(2.5);
  });
});
