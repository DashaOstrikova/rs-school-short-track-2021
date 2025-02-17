/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  matrix.forEach((line, lineIndex) => {
    line.forEach((row, rowIndex) => {
      if (!matrix[lineIndex - 1] || matrix[lineIndex - 1][rowIndex] > 0) {
        sum += row;
      }
    });
  });
  return sum;
}

module.exports = getMatrixElementsSum;
