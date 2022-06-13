const { Stack, Queue } = require("./index.js");
describe("Stack Class", () => {
  it("should initialize with an empty list", () => {
    const stack = new Stack();
    expect(stack.readableList).toEqual("");
  });

  it("should initialize with an existing list", () => {
    const stack = new Stack([1, 2, 3]);
    expect(stack.readableList).toEqual("1,2,3");
  });

  it("#push should add a new item to the stack", () => {
    const stack = new Stack([1]);
    stack.push(2);
    expect(stack.readableList).toEqual("1,2");
  });

  it("#pop should remove last item in list", () => {
    const stack = new Stack([1]);
    stack.push(2);
    expect(stack.pop()).toEqual(2);
    expect(stack.readableList).toEqual("1");
  });

  it("#peek should return the top of the list", () => {
    const stack = new Stack([1]);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
    expect(stack.readableList).toEqual("1,2");
  });
});
// start mentality on test=>forwards thinking, test should be outline of how the thing your testing works so you can test it as you make it
describe("Queue Class", () => {
  it("should initialize with an empty list", () => {
    const queue = new Queue();
    expect(queue.readableList).toEqual("");
  });

  it("should initialize with an existing list", () => {
    const queue = new Queue([1, 2, 3]);
    expect(queue.readableList).toEqual("1,2,3");
  });

  it("#onqueue should add item to end of que", () => {
    const queue = new Queue([1, 2, 3]);
    queue.onqueue(4);
    expect(queue.readableList).toEqual("1,2,3,4");
  });

  it("#dequeue should remove item from front of que", () => {
    const queue = new Queue([1, 2, 3]);
    // when testing things like array methods, make sure your feeding in the right data type, for example a number vs a string
    expect(queue.dequeue()).toEqual(1);
    expect(queue.readableList).toEqual("2,3");
  });

  it("hasNext should return if there is something in the array", () => {
    const queue = new Queue([1, 2, 3]);
    expect(queue.hasNext).toEqual(true);
  });

  it("hasNext should return if there is something in the array", () => {
    const queue = new Queue();
    expect(queue.hasNext).toEqual(false);
  });
});

describe("#reverse", () => {
  it("should reserve an array", () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
  });
});
// it("#push should add a new item to the stack ", () => {
//   const stack = new Stack();
//   stack.push(1);
//   expect(stack.peek()).toEqual(1);
// });
// add more tests here...
