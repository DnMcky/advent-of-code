
const solve = (input, part) => {
    const rulesPerBagColour = input.reduce((acc, rule) => {
        const [_colour, canContain] = rule.split(' bags contain ');
        
    }, {});

    // create a list of colours that can directly contain gold shiny bags

    // create a list of colours that cannot hold any bags 
}

const canDirectlyContainAGoldBag = (rule) => {
    const [_colour, canContain] = rule.split(' bags contain ');
    return canContain.includes('shiny gold bag');
}

const expected = part => part === 1 ? 6726 : 3316;

module.exports = { solve, expected, canDirectlyContainAGoldBag };