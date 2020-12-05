const solve = (input, part) => {
    return part === 0 ? 1 : 2;
}

const expected = part => part === 1 ? 980499 : 200637446;

module.exports = { solve, expected };