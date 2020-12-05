const { 
    solve, 
} = require('./solve');
  
  test('solve', () => {
    expect(solve(input, 1)).toBe(2);
    expect(solve(input, 2)).toBe(1);
  });
  
