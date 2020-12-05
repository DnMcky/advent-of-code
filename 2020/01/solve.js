const solve = (input, part) => {
    const values = convertInputToInts(input)
    const pair = findValuePairThatSum2020(values)
    if (part === 1) {
        const pair = findValuePairThatSum2020(values)
        return pair.reduce(multiplyReducer)
    } else if (part === 2) {
        const triplet = findValueTripletsThatSum2020(values)
        return triplet.reduce(multiplyReducer)
    }
    return multiplyList(pair);
}

const multiplyReducer = (accumulator, currentValue) => accumulator * currentValue;

const convertInputToInts = (input) => {
    return input.map(x => parseInt(x))
}

const findValueTripletsThatSum2020 = (values) => {
    for(i=0; i < values.length; i++) {
        for(j=i; j < values.length; j++) {
            for(k=j; k< values.length; k++)
            if (values[i] + values[j] + values[k] === 2020) {
                return [values[i], values[j], values[k]]
            }
        }
    }
}

const findValuePairThatSum2020 = (values) => {
    for(i=0; i < values.length; i++) {
        for(j=0; j < values.length; j++) {
            if (values[i] + values[j] === 2020) {
                return [values[i],values[j]]
            }
        }
    }
}

const expected = part => part === 1 ? 980499 : 200637446;

module.exports = { solve, expected, findValuePairThatSum2020, findValueTripletsThatSum2020 };