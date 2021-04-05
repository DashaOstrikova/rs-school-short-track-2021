/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nArray = String(n).split('').map(Number);
  const min = Math.min(...nArray);
  const minIndex = nArray.findIndex((num) => min === num);
  if (minIndex >= 0) {
    nArray.splice(minIndex, 1);
  }
  return Number(nArray.join(''));
}

module.exports = deleteDigit;
