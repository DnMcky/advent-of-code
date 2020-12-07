var _ = require('lodash');

const solve = (input, part) => {
    return part === 1 ? 1 : 2;
}

const expected = part => part === 1 ? 2 : 4;

module.exports = { solve, expected };