const { endsWith } = require("lodash");

const solve = (input, part) => {
     //a rock, b paper, c scissors
     //x rock, y paper, z scissors
     // 1 point for rock, 2 points for paper, 3 points for scissors
     // 0 for a loss, 3 for a draw, 6 for a win
}

const expected = part => part === 1 ? 980499 : 200637446;

module.exports = { solve, expected };