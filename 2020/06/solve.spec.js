const { numberOfAyes, numberOfUnanimousAyes } = require('./solve');

test('numberOfAyes', () => {
  expect(numberOfAyes("abc")).toBe(3);
  expect(numberOfAyes("abac")).toBe(3);
  expect(numberOfAyes("aaaa")).toBe(1);
  expect(numberOfAyes("b")).toBe(1);
});

test('numberOfUnanimousAyes', () => {
    expect(numberOfUnanimousAyes("abc")).toBe(3);
    expect(numberOfUnanimousAyes("ab ac")).toBe(1);
    expect(numberOfUnanimousAyes("a a a a")).toBe(1);
    expect(numberOfUnanimousAyes("b")).toBe(1);
  });

