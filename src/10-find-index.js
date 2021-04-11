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
  let startIndex = 0;
  let endIndex = array.length;
  let search = true;
  let middle = 0;

  while (search) {
    middle = Math.floor((startIndex + endIndex) / 2);
    if (array[middle] === value) {
      search = false;
    } else if (array[middle] > value) {
      endIndex = middle;
    } else {
      startIndex = middle;
    }

    if (endIndex - startIndex === 0) {
      search = false;
    }
  }
  return middle;
}

module.exports = findIndex;
