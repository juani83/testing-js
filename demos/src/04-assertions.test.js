// matchers
test('test obj', () => {
  const data = { name: 'nico' };
  data.lastname = 'molina';
  expect(data).toEqual({ name: 'nico', lastname: 'molina' });
});

test('test null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('test booleans', () => {
  const data = true;
  expect(data).toEqual(true);
  expect(data).not.toEqual(false);
  const data1 = 0;
  expect(data1).toBeFalsy();
  const data2 = 1;
  expect(data2).toBeTruthy();
});

test('test strings', () => {
  const data = 'Christoph';
  expect(data).toMatch(/stop/);
});

test('test list / arrays', () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(3);
});
