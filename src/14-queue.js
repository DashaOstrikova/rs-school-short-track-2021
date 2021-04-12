const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  enqueue(element) {
    const newNode = new ListNode();
    newNode.value = element;
    if (!this.queue) {
      this.queue = newNode;
    } else if (!this.queue.next) {
      this.queue.next = newNode;
    } else {
      this.lastElement.next = newNode;
    }
    this.lastElement = newNode;
  }

  dequeue() {
    const result = this.queue.value;
    this.queue = this.queue.next;

    return result;
  }
}

module.exports = Queue;
