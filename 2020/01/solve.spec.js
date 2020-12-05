const { 
  solve, 
  findValuePairThatSum2020, 
  findValueTripletsThatSum2020 } = require('./solve');

test('solve', () => {
  const input = ['1721','979','366','299','675','1456']
  expect(solve(input, 1)).toBe(514579);
  expect(solve(input, 2)).toBe(241861950);
});

test('findValuePairThatSum2020', () => {
  const input = [1721,979,366,299,675,1456]
  expect(findValuePairThatSum2020(input)).toStrictEqual([1721, 299]);
});

test('findValueTripletsThatSum2020', () => {
  const input = [1721,979,366,299,675,1456]
  expect(findValueTripletsThatSum2020(input)).toStrictEqual([979, 366, 675]);
});