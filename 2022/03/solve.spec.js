const { solve, checkRucksackForItemInBothCompartments, groupElfRucksacks } = require('./solve');
  test('checkRucksackForItemInBothCompartments', () => {
    expect(checkRucksackForItemInBothCompartments('vJrwpWtwJgWrhcsFMMfFFhFp')).toBe('p');
    expect(checkRucksackForItemInBothCompartments('jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL')).toBe('L');
    expect(checkRucksackForItemInBothCompartments('PmmdzqPrVvPwwTWBwgC Z')).toBe('P');
    expect(checkRucksackForItemInBothCompartments('wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn')).toBe('v');
    expect(checkRucksackForItemInBothCompartments('ttgJtRGJQctTZtZT')).toBe('t');
    expect(checkRucksackForItemInBothCompartments('CrZsJsPPZsGzwwsLwLmpwMDw')).toBe('s');
  });

  test('groupElfRucksacks', () => {
    const input = ['vJrwpWtwJgWrhcsFMMfFFhFp',
    'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
    'PmmdzqPrVvPwwTWBwg',
    'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
    'ttgJtRGJQctTZtZT',
    'CrZsJsPPZsGzwwsLwLmpwMDw']
    expect(groupElfRucksacks(input)).toStrictEqual([['vJrwpWtwJgWrhcsFMMfFFhFp',
    'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
    'PmmdzqPrVvPwwTWBwg'], ['wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
    'ttgJtRGJQctTZtZT',
    'CrZsJsPPZsGzwwsLwLmpwMDw']])
  })

  test('solve', () => {
    const input = ['vJrwpWtwJgWrhcsFMMfFFhFp',
      'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
      'PmmdzqPrVvPwwTWBwg',
      'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
      'ttgJtRGJQctTZtZT',
      'CrZsJsPPZsGzwwsLwLmpwMDw']
    expect(solve(input, 1)).toBe(157);
    expect(solve(input, 2)).toBe(70);    
  });
  

