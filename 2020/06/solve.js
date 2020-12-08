var _ = require('lodash');

const solve = (input, part) => {
    const allGroups = splitIntoGroups(input);
    const totalAyes = allGroups.reduce((acc, current) => {
        const ayesInGroup = part === 1? numberOfAyes(current) : numberOfUnanimousAyes(current);
        return acc + ayesInGroup;
    }, 0)

    return totalAyes;
}

const numberOfUnanimousAyes = (groupsAnswers) => {
    const groupSize = groupsAnswers.split(' ').length;
    const answers = groupsAnswers.split('');
    const answersCount = answers.reduce(foo, {});
    const unanimousAyes = Object.values(answersCount).filter(x => x === groupSize)
    return unanimousAyes.length;
}

const foo = (acc, answer) => {
    if (typeof acc[answer] == 'undefined') {
      acc[answer] = 1;
    } else {
      acc[answer] += 1;
    }
  
    return acc;
  }
  

const numberOfAyes = (groupsAnswers) => {
    const groupsAs = groupsAnswers.split('');
    const uniqueAs = groupsAs.reduce(blah, [])
    return uniqueAs.length;
}

const blah = (acc, answer) => {
    if(!acc.includes(answer) && answer != ' ') {
        acc.push(answer);
    }
    return acc;
};

const splitIntoGroups = (input) => {
    let groups = [];
    let groupIndex = 0;
    for(i = 0; i < input.length; i++) {
        if(input[i] === " ") {
            groupIndex++;
        } else if (groups[groupIndex] === undefined) {
            groups.push(input[i]);
        } else {
            // I think I can do this without lodash
            groups[groupIndex] = _.join([groups[groupIndex], input[i]], ' ')
        }
    }
    return groups;
}


const expected = part => part === 1 ? 6726 : 3316;

module.exports = { solve, expected, numberOfAyes, numberOfUnanimousAyes };