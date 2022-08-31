const solution = require('./minesweeper.js');

test('test 1', () => {
    expect(solution([[true,false,false], 
        [false,true,false], 
        [false,false,false]])).toEqual([[1,2,1], 
            [2,1,1], 
            [1,1,1]]);
});

test('test 2', () => {
    expect(solution([[false,false,false], 
        [false,false,false]])).toEqual([[0,0,0], 
            [0,0,0]]);
});

test('test 3', () => {
    expect(solution([[true,false,false,true], 
        [false,false,true,false], 
        [true,true,false,true]])).toEqual([[0,2,2,1], 
            [3,4,3,3], 
            [1,2,3,1]]);
});

test('test 4', () => {
    expect(solution([[true,true,true], 
        [true,true,true], 
        [true,true,true]])).toEqual([[3,5,3], 
            [5,8,5], 
            [3,5,3]]);
});

test('test 5', () => {
    expect(solution([[false,true,true,false], 
        [true,true,false,true], 
        [false,false,true,false]])).toEqual([[3,3,3,2], 
            [2,4,5,2], 
            [2,3,2,2]]);
});

test('test 6', () => {
    expect(solution([[true,false], 
        [true,false], 
        [false,true], 
        [false,false], 
        [false,false]])).toEqual([[1,2], 
            [2,3], 
            [2,1], 
            [1,1], 
            [0,0]]);
});
