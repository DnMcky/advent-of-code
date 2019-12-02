function solve(masses, part) {
    return masses.reduce(reducer, 0);
}
 
const reducer = (accumulator, mass) => {
    const currentTotalFuel = parseInt(accumulator);
    const currentMass = parseInt(mass);
    const journeyFuel = Math.floor((currentMass/3)) - 2;
    return currentTotalFuel + journeyFuel;
};
 
 const expected = part => part === 1 ? 3349352 : -1;
 
 module.exports = { solve,expected };