const solve = (input, part) => {
    
    const coords = input.map((boardingPass) => {
        return getSeatsRowAndColumn(boardingPass);
    });

    const seatIds = coords.map(x => {
        const [row, column] = x;
        return row * 8 + column;
    });

    const sortedSeatIds = seatIds.sort((a,b) => a - b);
    const seatIdBeforeMine = sortedSeatIds.find((element, index, array) => {
        return array[index+1] - element > 1;
    })

    const biggestId = Math.max(...seatIds);
    return part === 1 ? biggestId : seatIdBeforeMine + 1;
}

const getSeatsRowAndColumn = (binaryMap) => {
    let rowCodes = [];
    for (var i = 0; i <= 127; i++) {
        rowCodes.push(i);
    }
    let columnCodes = [];
    for (var i = 0; i <= 7; i++) {
        columnCodes.push(i);
    }

    const binaryList = binaryMap.split('');
    const rowMap = binaryList.slice(0,7);
    const columnMap = binaryList.slice(7, 10);

    const row = rowMap.reduce(rowReducer, rowCodes);
    const column = columnMap.reduce(columnReducer, columnCodes);
    return [row[0], column[0]]
}

// a closure might be a good way to reduce this duplication here 
const rowReducer = (acc, currentValue) => {
    const half_length = Math.ceil(acc.length / 2);    
    const leftSide = acc.slice(0,half_length);
    const rightSide = acc.slice(half_length, acc.length);
    
    return currentValue === "F" ? leftSide : rightSide;
}

const columnReducer = (acc, currentValue) => {
    const half_length = Math.ceil(acc.length / 2);    
    const leftSide = acc.slice(0,half_length);
    const rightSide = acc.slice(half_length, acc.length);
    
    return currentValue === "L" ? leftSide : rightSide;
}

const expected = part => part === 1 ? 871 : 640;

module.exports = { solve, expected, getSeatsRowAndColumn };