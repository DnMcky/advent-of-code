function solve(input, part) {
    const masses = input.map(x => Number(x))
    return masses.reduce(reducer(part), 0);
}
 
const reducer = (part) => (accumulator, mass) => {
    const journeyFuel = part === 1 ? massToFuel(mass) : fuelMassAdjusted(mass);
    return accumulator + journeyFuel;
};

const fuelMassAdjusted = (n, acc = 0) => {
    const x = massToFuel(n);
    if (x <= 0) return acc; 
    return fuelMassAdjusted(x, acc + x);
}

const massToFuel = (mass) => {
    return Math.floor((mass/3)) - 2;
}

const expected = part => part === 1 ? 3349352 : 5021154;
 
 module.exports = { solve, expected };