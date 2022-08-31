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
