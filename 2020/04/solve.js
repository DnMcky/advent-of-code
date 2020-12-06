var _ = require('lodash');

const solve = (input, part) => {
    const passports = splitIntoPassports(input);
    const reducer = part === 1 ? reducer1 : reducer2;
    const count = passports.reduce(reducer, 0);
    return  count;
}

const reducer1 = (acc, passport) => {
    return isPassportValid(passport) ? acc+=1 : acc;
}

const reducer2 = (acc, passport) => {
    if (!isPassportValid(passport)) return acc;
    return isPassportDataValid(passport) ? acc+=1 : acc;
}

const splitIntoPassports = (input) => {
    let passports = [];
    let passportsIndex = 0;
    for(i = 0; i < input.length; i++) {
        if(input[i] === " ") {
            passportsIndex++;
        } else if (passports[passportsIndex] === undefined) {
            passports.push(input[i]);
        } else {
            // I think I can do this without lodash
            passports[passportsIndex] = _.join([passports[passportsIndex], input[i]], ' ')
        }
    }
    return passports;
}

// I think lodash has an object validation function I should check out for this too.
const isPassportDataValid = (passport) => {
    const ppItems = passport.split(' ');
    let ppKVs = ppItems.map((ppItem) => {
        return ppItem.split(":") 
      });

      const validatedValues = ppKVs.map((kv) => {
        const [key, value] = kv;
        // Consider switch here - whats fastest conditional?
        if (key === 'byr') {
            return isXDigitNumber(value, 4) && isWithinRange(value, 1920, 2002);
        } else if (key === 'iyr') {
            return isXDigitNumber(value, 4) && isWithinRange(value, 2010, 2020);
        } else if (key === 'eyr') {
            return isXDigitNumber(value, 4) && isWithinRange(value, 2020, 2030);
        } else if (key === 'pid') {
            return isXDigitNumber(value, 9);
        } else if (key === 'hgt') {
            return isHieghtValid(value, 9);
        } else if (key === 'hcl') {
            return isHairColourValid(value);
        } else if (key === 'ecl') {
            return isEyeColourValid(value);
        };
    })  

    return !validatedValues.includes(false);
}

// byr (Birth Year) - four digits; at least 1920 and at most 2002.
// iyr (Issue Year) - four digits; at least 2010 and at most 2020.
// eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
// pid (Passport ID) - a nine-digit number, including leading zeroes.
const isXDigitNumber = (number, noOfDigits) => {
    const regex = new RegExp(`^\\d{${noOfDigits}}$`); 
    return !!number.match(regex);
};

const isWithinRange =(number, lowerBound, upperBound) => {
    return number >= lowerBound && number <= upperBound
};

// hgt (Height) - a number followed by either cm or in:
// If cm, the number must be at least 150 and at most 193.
// If in, the number must be at least 59 and at most 76.
const isHieghtValid = (hieght) => {
    const isInCMs = hieght.endsWith('cm');
    const hieghtSansUnit = hieght.match(/\d*/);
    return isInCMs ? isWithinRange(hieghtSansUnit, 150, 193) :  isWithinRange(hieghtSansUnit, 59, 76);
};

// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
const isHairColourValid = (hairColour) => {
    return !!hairColour.match(/#\b[0-9A-F]{6}\b/gi
        );
};

// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
const isEyeColourValid = (eyeColour) => {
    return !!eyeColour.match(/(amb|blu|brn|gry|grn|hzl|oth)/);
};

const isPassportValid = (passport) => {
    return passport.includes('ecl:') && 
        passport.includes('pid:') && 
        passport.includes('hcl:') && 
        passport.includes('eyr:') && 
        passport.includes('byr:') && 
        passport.includes('iyr:') && 
        passport.includes('hgt:');
}
const expected = part => part === 1 ? 182 : 109;

module.exports = { solve, expected, splitIntoPassports, isPassportValid, isXDigitNumber, isWithinRange, isHieghtValid, isEyeColourValid, isHairColourValid, isPassportDataValid };