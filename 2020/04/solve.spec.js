const { 
    solve, 
    splitIntoPassports,
    isPassportValid,
    isPassportDataValid,
    isXDigitNumber,
    isWithinRange,
    isHieghtValid,
    isEyeColourValid,
    isHairColourValid,
} = require('./solve');
  
  test('solve', () => {
    const input = [
      "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd",
      "byr:1937 iyr:2017 cid:147 hgt:183cm",
      " ",
      "iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884",
      "hcl:#cfa07d byr:1929",
      " ",
      "hcl:#ae17e1 iyr:2013",
      "eyr:2024",
      "ecl:brn pid:760753108 byr:1931",
      "hgt:179cm",
      " ",
      "hcl:#cfa07d eyr:2025 pid:166559648",
      "iyr:2011 ecl:brn hgt:59in",
    ];

    expect(solve(input, 1)).toBe(2);

    const validPPs = [
      "pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980",
      "hcl:#623a2f",
      " ",
      "eyr:2029 ecl:blu cid:129 byr:1989",
      "iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm",
      " ",
      "hcl:#888785",
      "hgt:164cm byr:2001 iyr:2015 cid:88",
      "pid:545766238 ecl:hzl",
      "eyr:2022",
      " ",
      "iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719",
    ];
    // expect(solve(validPPs, 2)).toBe(4);

    const invalidPPs = [
      "eyr:1972 cid:100",
      "hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926",
      " ",
      "iyr:2019",
      "hcl:#602927 eyr:1967 hgt:170cm",
      "ecl:grn pid:012533040 byr:1946",
      " ",
      "hcl:dab227 iyr:2012",
      "ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277",
      " ",
      "hgt:59cm ecl:zzz",
      "eyr:2038 hcl:74454a iyr:2023",
      "pid:3556412378 byr:2007",
    ];
    // expect(solve(invalidPPs, 2)).toBe(0);

  });

  test('splitIntoPassports', () => {
    const input = [
      "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd",
      "byr:1937 iyr:2017 cid:147 hgt:183cm",
      " ",
      "iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884",
      "hcl:#cfa07d byr:1929",
      " ",
      "hcl:#ae17e1 iyr:2013",
      "eyr:2024",
      "ecl:brn pid:760753108 byr:1931",
      "hgt:179cm",
      " ",
      "hcl:#cfa07d eyr:2025 pid:166559648",
      "iyr:2011 ecl:brn hgt:59in",
    ]
    expect(splitIntoPassports(input)).toStrictEqual([
      "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd byr:1937 iyr:2017 cid:147 hgt:183cm",
      "iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884 hcl:#cfa07d byr:1929",
      "hcl:#ae17e1 iyr:2013 eyr:2024 ecl:brn pid:760753108 byr:1931 hgt:179cm",
      "hcl:#cfa07d eyr:2025 pid:166559648 iyr:2011 ecl:brn hgt:59in",
    ]);
  });

  test('isPassportValid', () => {
    expect(isPassportValid("ecl:gry pid:860033327 eyr:2020 hcl:#fffffd byr:1937 iyr:2017 cid:147 hgt:183cm")).toBe(true);
    expect(isPassportValid("iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884 hcl:#cfa07d byr:1929")).toBe(false);
    expect(isPassportValid("hcl:#ae17e1 iyr:2013 eyr:2024 ecl:brn pid:760753108 byr:1931 hgt:179cm")).toBe(true);
    expect(isPassportValid("hcl:#cfa07d eyr:2025 pid:166559648 iyr:2011 ecl:brn hgt:59in")).toBe(false);
  });

  test('isPassportDataValid', () => {
    // expect(isPassportValid("pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980 hcl:#623a2f")).toBe(true);
    // expect(isPassportValid("hcl:#888785 hgt:164cm byr:2001 iyr:2015 cid:88 pid:545766238 ecl:hzl eyr:2022")).toBe(true);
    // expect(isPassportValid("eyr:2029 ecl:blu cid:129 byr:1989 iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm")).toBe(true);
    // expect(isPassportValid("iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719")).toBe(true);

    expect(isPassportDataValid("hgt:59cm ecl:zzz eyr:2038 hcl:74454a iyr:2023 pid:3556412378 byr:2007")).toBe(false);
    expect(isPassportDataValid("hcl:dab227 iyr:2012 ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277")).toBe(false);
    expect(isPassportDataValid("iyr:2019 hcl:#602927 eyr:1967 hgt:170cm ecl:grn pid:012533040 byr:1946")).toBe(false);
    expect(isPassportDataValid("eyr:1972 cid:100 hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926")).toBe(false);
  });

test('isXDigitNumber', () => {
  expect(isXDigitNumber("1234", 4)).toBe(true);
  expect(isXDigitNumber("111", 4)).toBe(false);
  expect(isXDigitNumber("1234566", 4)).toBe(false);
  expect(isXDigitNumber("9999", 4)).toBe(true);
});

test('isWithinRange', () => {
  expect(isWithinRange("1920", 1920, 2002)).toBe(true);
  expect(isWithinRange("2002", 1920, 2002)).toBe(true);
  expect(isWithinRange("2003", 1920, 2002)).toBe(false);
  expect(isWithinRange("1919", 1920, 2002)).toBe(false);

  expect(isWithinRange("2010", 2010, 2020)).toBe(true);
  expect(isWithinRange("2020", 2010, 2020)).toBe(true);
  expect(isWithinRange("2021", 2010, 2020)).toBe(false);
  expect(isWithinRange("2009", 2010, 2020)).toBe(false);
  
  expect(isWithinRange("2020", 2020, 2030)).toBe(true);
  expect(isWithinRange("2030", 2020, 2030)).toBe(true);
  expect(isWithinRange("2019", 2020, 2030)).toBe(false);
  expect(isWithinRange("2031", 2020, 2030)).toBe(false);
});

// hgt (Height) - a number followed by either cm or in:
// If cm, the number must be at least 150 and at most 193.
// If in, the number must be at least 59 and at most 76.
test('isHieghtValid', () => {
  expect(isHieghtValid("150cm")).toBe(true);
  expect(isHieghtValid("193cm")).toBe(true);
  expect(isHieghtValid("149cm")).toBe(false);
  expect(isHieghtValid("194cm")).toBe(false);

  expect(isHieghtValid("59in")).toBe(true);
  expect(isHieghtValid("76in")).toBe(true);
  expect(isHieghtValid("58in")).toBe(false);
  expect(isHieghtValid("77in")).toBe(false);
});

// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
test('isEyeColourValid', () => {
  expect(isEyeColourValid("amb")).toBe(true);
  expect(isEyeColourValid("blu")).toBe(true);
  expect(isEyeColourValid("brn")).toBe(true);
  expect(isEyeColourValid("gry")).toBe(true);
  expect(isEyeColourValid("grn")).toBe(true);
  expect(isEyeColourValid("hzl")).toBe(true);
  expect(isEyeColourValid("oth")).toBe(true);
  expect(isEyeColourValid("lol")).toBe(false);
});

// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
test('isHairColourValid', () => {
  expect(isHairColourValid("#cd5c5c")).toBe(true);
  expect(isHairColourValid("#f08080")).toBe(true);
  expect(isHairColourValid("#fa8072")).toBe(true);
  expect(isHairColourValid("#e9967a")).toBe(true);
  expect(isHairColourValid("#ffa07a")).toBe(true);
  expect(isHairColourValid("#gggggg")).toBe(false);
  expect(isHairColourValid("#000")).toBe(false);
  expect(isHairColourValid("lol")).toBe(false);
});
