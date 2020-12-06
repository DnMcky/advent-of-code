const { 
    solve, 
    calculateTreesHit,
} = require('./solve');
  
  test('solve', () => {
    const input = [
      "..##.......",// 0,0
      "#...#...#..",// 1,3
      ".#....#..#.",// 2,6
      "..#.#...#.#",// 3,9
      ".#...##..#.",// 4,12(0?)
      "..#.##.....",// 5,15
      ".#.#.#....#",// 6,18
      ".#........#",// 7,21
      "#.##...#...",// 8,24
      "#...##....#",// 9,27
      ".#..#...#.#"]// 10,30
    expect(solve(input, 1)).toBe(7);
    expect(solve(input, 2)).toBe(336);
  });

  test('solve', () => {
    const input = [
      "..##.......",// 0,0
      "#...#...#..",// 1,3
      ".#....#..#.",// 2,6
      "..#.#...#.#",// 3,9
      ".#...##..#.",// 4,12(0?)
      "..#.##.....",// 5,15
      ".#.#.#....#",// 6,18
      ".#........#",// 7,21
      "#.##...#...",// 8,24
      "#...##....#",// 9,27
      ".#..#...#.#"]// 10,30
    expect(calculateTreesHit(input, 3, 1)).toBe(7);
    expect(calculateTreesHit(input, 1, 1)).toBe(2);
    expect(calculateTreesHit(input, 5, 1)).toBe(3);
    expect(calculateTreesHit(input, 7, 1)).toBe(4);
    expect(calculateTreesHit(input, 1, 2)).toBe(2);
  });
  
