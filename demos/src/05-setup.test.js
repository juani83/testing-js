describe('grupo 1', () => {
  beforeAll(() => {
    console.log('beforeAll');
    // Setup antes de correr pruebas
    // Levantar una DB por ejemplo
  });

  afterAll(() => {
    console.log('afterAll');
    // Teardown
    // Bajar una DB por ejemplo
  });

  beforeEach(() => {
    console.log('beforeEach');
    // Corre antes de cada caso
  });

  afterEach(() => {
    console.log('afterEach');
    // Corre despues de cada caso
  });

  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    console.log('case 2');
    expect(1 + 3).toBe(4);
  });

  describe('grupo 2', () => {
    beforeAll(() => {
      console.log('beforeAll');
      // Setup antes de correr pruebas
      // Levantar una DB por ejemplo
    });
    test('case 3', () => {
      console.log('case 3');
      expect(1 + 1).toBe(2);
    });
    test('case 4', () => {
      console.log('case 4');
      expect(1 + 3).toBe(4);
    });
  });
});
