const { solve, determineRoundScore } = require('./solve');
       //a rock, b paper, c scissors
     //x rock, y paper, z scissors
     // 1 point for rock, 2 points for paper, 3 points for scissors
     // 0 for a loss, 3 for a draw, 6 for a win
  test('determineRoundScore', () => {
    expect(determineRoundScore('A Y', 1)).toBe(8);
    expect(determineRoundScore('B X', 1)).toBe(1);
    expect(determineRoundScore('C Z', 1)).toBe(6);
    expect(determineRoundScore('A X', 1)).toBe(4);
    expect(determineRoundScore('A Z', 1)).toBe(3);
    expect(determineRoundScore('B Y', 1)).toBe(5);
    expect(determineRoundScore('B Z', 1)).toBe(9);
    expect(determineRoundScore('C X', 1)).toBe(7);
    expect(determineRoundScore('C Y', 1)).toBe(2);

    expect(determineRoundScore('B X', 2)).toBe(1);
    expect(determineRoundScore('A Y', 2)).toBe(4);
    expect(determineRoundScore('C Z', 2)).toBe(7);
    expect(determineRoundScore('A X', 2)).toBe(3);
    expect(determineRoundScore('A Z', 2)).toBe(8);
    expect(determineRoundScore('B Y', 2)).toBe(5);
    expect(determineRoundScore('B Z', 2)).toBe(9);
    expect(determineRoundScore('C X', 2)).toBe(2);
    expect(determineRoundScore('C Y', 2)).toBe(6);
  });

  test('solve', () => {
    const input = ['A Y', 'B X', 'C Z']
    expect(solve(input, 1)).toBe(15);
    expect(solve(input, 2)).toBe(12);    
  });
  
