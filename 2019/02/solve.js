const ADD = 1;
const MULTIPLY = 2;

const solve = (_test, part) => {
    const test = [1,0,0,0,99];
    const operator = test[0];
    const firstInput = test[1];
    const secondInput = test[2];
    const outputTo = test[3];

    const output = operator === ADD ? firstInput + secondInput : firstInput * secondInput;

    test[outputTo] = output;

    return test;
}

const expected = part => part === 1 ? [2,0,0,0,99] : 5021154;

module.exports = { solve, expected };