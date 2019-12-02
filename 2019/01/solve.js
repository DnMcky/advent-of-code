function solve(input, part) {
    const masses = input.map(x => Number(x))
    return masses.reduce(reducer, 0);
}
 
const reducer = (accumulator, mass) => {
    const journeyFuel = massToFuel(mass);
    return accumulator + journeyFuel;
};

const massToFuel = (mass) => {
    return Math.floor((mass/3)) - 2;
}
 const expected = part => part === 1 ? 3349352 : -1;
 
 module.exports = { solve, expected };