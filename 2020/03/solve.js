const solve = (input, part) => {
    const movePatterns = [
        { x: 1, y: 1},
        { x: 3, y: 1},
        { x: 5, y: 1},
        { x: 7, y: 1},
        { x: 1, y: 2},
    ];

    const results = movePatterns.map(({x, y}) => calculateTreesHit(input, x, y))

    return part === 1 ? results[1] : results.reduce((acc, currentValue) => acc * currentValue);
}

const calculateTreesHit = (input, moveX, moveY) => {
    const MAP_WIDTH = input[0].length;
    let xCoord = 0;
    let treeCount = 0;
    for (yCoord = moveY; yCoord < input.length; yCoord+=moveY) {
        const row = input[yCoord].split('');
        xCoord += moveX
        if (xCoord > MAP_WIDTH-1) xCoord -= MAP_WIDTH;
        if (row[xCoord] === '#') {
            treeCount++;
        }
    }
    return treeCount;
}

const expected = part => part === 1 ? 282 : 958815792;

module.exports = { solve, expected, calculateTreesHit };