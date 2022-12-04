const solve = (input, part) => {
     return input.reduce((accumulator, currentRound) => {
          return accumulator + determineRoundScore(currentRound, part);
     }, 0)
}

const expected = part => part === 1 ? 13268 : 15508;

const MOVE_SCORE = {
     X: 1, // rock
     Y: 2, // paper
     Z: 3, // scissors
}; 

const RESULT_SCORE = {
     WIN: 6,
     DRAW: 3,
     LOSE: 0,
}

const ROUND_POINTS = {
     AX: RESULT_SCORE.DRAW + MOVE_SCORE.X,
     AY: RESULT_SCORE.WIN + MOVE_SCORE.Y,
     AZ: RESULT_SCORE.LOSE + MOVE_SCORE.Z,
     BX: RESULT_SCORE.LOSE + MOVE_SCORE.X,
     BY: RESULT_SCORE.DRAW + MOVE_SCORE.Y,
     BZ: RESULT_SCORE.WIN + MOVE_SCORE.Z,
     CX: RESULT_SCORE.WIN + MOVE_SCORE.X,
     CY: RESULT_SCORE.LOSE + MOVE_SCORE.Y,
     CZ: RESULT_SCORE.DRAW + MOVE_SCORE.Z,
}

const ROUND_POINTS_2 = {
     AX: MOVE_SCORE.Z + RESULT_SCORE.LOSE, // to lose to rock play scissors
     AY: MOVE_SCORE.X + RESULT_SCORE.DRAW, // to draw to rock play rock
     AZ: MOVE_SCORE.Y + RESULT_SCORE.WIN, // to win to rock play paper
     BX: MOVE_SCORE.X + RESULT_SCORE.LOSE, // to lose to paper play rock
     BY: MOVE_SCORE.Y + RESULT_SCORE.DRAW, // to draw to the paper play paper
     BZ: MOVE_SCORE.Z + RESULT_SCORE.WIN, // to win to paper play scirrors
     CX: MOVE_SCORE.Y + RESULT_SCORE.LOSE, // to lose to scissors play peper
     CY: MOVE_SCORE.Z + RESULT_SCORE.DRAW, // to draw to scissors play scissors
     CZ: MOVE_SCORE.X + RESULT_SCORE.WIN, //  to win to scissors play rock
}

const determineRoundScore = (round, part) => {
     const moves = round.split(' ');
     const elfMove = moves[0];
     const myMove = moves[1];
     return part === 1 ? ROUND_POINTS[`${elfMove}${myMove}`] : ROUND_POINTS_2[`${elfMove}${myMove}`]
}

module.exports = { solve, expected, determineRoundScore };