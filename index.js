class Stack {
  #list = [];
  constructor(initialList) {
    if (initialList) {
      this.#list = initialList;
    }
  }
  // adds to end
  push(item) {
    this.#list.push(item);
  }
  // removes last
  pop() {
    return this.#list.pop();
  }
  // checks listed index
  peek() {
    return this.#list[this.#list.length - 1];
  }

  get readableList() {
    return this.#list.toString();
  }
}

class Queue {
  #list = [];
  constructor(initialList) {
    if (initialList) {
      this.#list = initialList;
    }
  }

  get readableList() {
    return this.#list.toString();
  }

  onqueue(item) {
    this.#list.push(item);
  }

  dequeue() {
    return this.#list.shift();
  }

  get hasNext() {
    return this.#list.length > 0;

    // this also works because of truthy and falsey statements in javascript, an empty array by default is false for example

    // return !!this.#list.length; ---> the !!makes it into an actual boolean
  }
}

function reverse(array) {
  const stack = new Stack(array);
  let reversedArray = [];
  // i is index starting with first, as long as its less then the array length itll keep going through, each time it does 1 it adds 1 to index number
  for (let i = 0; i < stack.length; i++) {
    reversedArray = [...reversedArray, stack.pop()];
  }
}

// myArray.map((val, index, array) => array[array.length - 1 - index]); -->should work, dunno how to refactor for what she wants.

//   const stack = new Stack(array);
//   const reversedArray = [];
//   reversedArray = stack.map(
//     (val, index, array) => array[array.length - 1 - index]
//   );
//   return reversedArray;
// ?

module.exports = { Stack, Queue };

// partner 1	Stack
// partner 2	Queue
// pair	O-1-dequeue
// demo	reverse-array-with-stack
// pair	check-syntax
