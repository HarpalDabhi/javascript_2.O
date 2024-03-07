function multiplyMatrices(matrix1, matrix2) {
    let result = [];

    // Initialize result matrix with zeros
    for (let i = 0; i < 3; i++) {
        result[i] = [];
        for (let j = 0; j < 3; j++) {
            result[i][j] = 0;
        }
    }

    // Perform matrix multiplication
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    return result;
}

// Example matrices
let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matrix2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

// Multiply matrices
let resultMatrix = multiplyMatrices(matrix1, matrix2);

// Print result
for (let row of resultMatrix) {
    console.log(row);
}


