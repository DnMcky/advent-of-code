const { 
  solve, 
  splitPasswordAndRule, 
  splitRule, } = require('./solve');

test('solve', () => {
  const input = ['1-3 a: abcde','1-3 b: cdefg','2-9 c: ccccccccc']
  expect(solve(input, 1)).toBe(2);
  expect(solve(input, 2)).toBe(1);
});

test('splitPasswordAndRule', () => {
  expect(splitPasswordAndRule('1-3 a: abcde')).toStrictEqual(['1-3 a', 'abcde']);
});

test('splitRule', () => {
  expect(splitRule('1-3 a')).toStrictEqual({lowerBound: 1, upperBound: 3, character: 'a'});
});