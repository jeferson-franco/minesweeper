function solution(matrix) {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        let rowResult = [];
        for (let j = 0; j < row.length; j++) {
            let cell = row[j];
            let cellResult = 0;
            if (cell === 0) {
                cellResult = 0;
            } else if (cell === 1) {
                cellResult = 1;
            } else if (cell === 9) {
                cellResult = 0;
            } else {
                let top = i > 0 ? matrix[i - 1][j] : 0;
                let bottom = i < matrix.length - 1 ? matrix[i + 1][j] : 0;
                let left = j > 0 ? matrix[i][j - 1] : 0;
                let right = j < row.length - 1 ? matrix[i][j + 1] : 0;
                let topLeft = i > 0 && j > 0 ? matrix[i - 1][j - 1] : 0;
                let topRight = i > 0 && j < row.length - 1 ? matrix[i - 1][j + 1] : 0;
                let bottomLeft = i < matrix.length - 1 && j > 0 ? matrix[i + 1][j - 1] : 0;
                let bottomRight = i < matrix.length - 1 && j < row.length - 1 ? matrix[i + 1][j + 1] : 0;
                cellResult = top + bottom + left + right + topLeft + topRight + bottomLeft + bottomRight;
            }
            rowResult.push(cellResult);
        }
        result.push(rowResult);
    }
    return result;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test minesweeper

// alternative solution
// const directions = [
//     [1, -1],
//     [1, 0],
//     [1, 1],
//     [0, -1],
//     [0, 1],
//     [-1, -1],
//     [-1, 0],
//     [-1, 1],
// ];
// solution = (matrix) =>
//     matrix.map((row, y) => row.map((col, x) => directions.reduce((count, i) => (count += !!(matrix[y + i[0]] && matrix[y + i[0]][x + i[1]])), 0)));

// alternative solution
// let dirs = [
//     { r: -1, c: -1 },
//     { r: -1, c: 0 },
//     { r: -1, c: 1 },
//     { r: 0, c: 1 },
//     { r: 0, c: -1 },
//     { r: 1, c: -1 },
//     { r: 1, c: 0 },
//     { r: 1, c: 1 },
// ];
// function solution(matrix) {
//     return matrix.map((a, r) => a.map((_, c) => dirs.reduce((p, v) => (p += (matrix[r + v.r] || [])[c + v.c] | 0), 0)));
// }
