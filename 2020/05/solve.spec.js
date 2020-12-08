const { solve, getSeatsRowAndColumn } = require('./solve');
  
test('solve', () => {
  const input = [
    'BFFFBBFRRR',
  'FFFBBBFRRR',
  'BBFFBBFRLL'
  ]
  expect(solve(input, 1)).toBe(820);
  expect(solve(input, 2)).toBe(640);
});

test('getSeatsRowAndColumn', () => {
  expect(getSeatsRowAndColumn("BFFFBBFRRR")).toStrictEqual([70,7]);
  expect(getSeatsRowAndColumn("FFFBBBFRRR")).toStrictEqual([14,7]);
  expect(getSeatsRowAndColumn("BBFFBBFRLL")).toStrictEqual([102,4]);
});

