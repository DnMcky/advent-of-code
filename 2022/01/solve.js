const solve = (input, part) => {
        const elfTotals = input.reduce((acc, currentValue) => {
            if (currentValue === '') {
                acc.push(0)
                return acc
            } else {
                const currentElfTotal = acc[acc.length - 1];
                acc.pop()
                acc.push(currentElfTotal + parseInt(currentValue)) 
                return acc;
            }
        }, [0])
        const sorted = elfTotals.sort()
        return part == 1 ? sorted.slice(-1) : sorted.slice(-3).reduce((a, b) => a+b) ;
}

const expected = part => part === 1 ? 71506 : 209603;

module.exports = { solve, expected };