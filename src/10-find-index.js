/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
//   let leng = array.length;
//   let middle = Math.floor(leng / 2);
//   while (middle || middle < array.length) {
//     middle = Math.floor(leng / 2);
//     if (array[middle] > value) {
//       leng = middle;
//     } else if (array[middle] < value) {
//       leng = leng + Math.floor(middle / 2) + 1;
//     } else if (array[middle] === value) {
//       return middle;
//     }
//   }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return 0;
}

module.exports = findIndex;
