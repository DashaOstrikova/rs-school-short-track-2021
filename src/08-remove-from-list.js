/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  const listItemArray = [];
  for (let currentItem = l; currentItem; currentItem = currentItem.next) {
    if (currentItem.value !== k) {
      listItemArray.push(currentItem);
    }
  }

  const result = listItemArray[0];
  let currentItem = result;
  listItemArray.forEach((item, index) => {
    if (index > 0) {
      currentItem.next = item;
      currentItem = item;
    }
  });
  currentItem.next = null;

  return result;
}

module.exports = removeKFromList;
