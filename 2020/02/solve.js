const solve = (input, part) => {
    const reducerForPart = part === 1 ? sledRentalPasswordValidationReducer : tobogganPasswordValidationReducer;
    return  input.reduce(reducerForPart, 0);
}

const tobogganPasswordValidationReducer = (accumulator, currentValue) => {
    const [rule, password] = splitPasswordAndRule(currentValue);
    const {lowerBound: firstPosition, upperBound: secondPosition, character} = splitRule(rule);
    const passwordCharacters = password.split('');

    const firstValid = passwordCharacters[firstPosition-1] === character;
    const secondValid = passwordCharacters[secondPosition-1] === character;

    return firstValid && !secondValid || secondValid && !firstValid ? accumulator + 1 : accumulator;
}; 

const sledRentalPasswordValidationReducer = (accumulator, currentValue) => {
    const [rule, password] = splitPasswordAndRule(currentValue);
    const {lowerBound, upperBound, character} = splitRule(rule);
    const characterCount = countCharacterOccurrence(password, character)
    return characterCount >= lowerBound && characterCount <= upperBound ? accumulator + 1 : accumulator;
};

const countCharacterOccurrence = (password, character) => {
    const characters = password.split('');
    let count = 0;
    for (i = 0; i < characters.length; i++) {
        if (characters[i] === character) {
            count++;
        }
    }
    return count;
}
 
const splitPasswordAndRule = (passwordAndRule) => {
    return passwordAndRule.split(': ');
}

const splitRule = (rule) => {
    const halfSplitRule = rule.split(' ');
    const character = halfSplitRule[1];
    const bounds = halfSplitRule[0].split('-');
    return {lowerBound: parseInt(bounds[0]), upperBound: parseInt(bounds[1]), character}
}

const expected = part => part === 1 ? 569 : 346;

module.exports = { solve, expected, splitPasswordAndRule, splitRule };