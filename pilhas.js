//Nathan Ferracini Batista

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

function decimalToBinary(decimal) {
  const stack = new Stack();
  let binary = '';

  while (decimal > 0) {
    stack.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }

  while (!stack.isEmpty()) {
    binary += stack.pop();
  }

  return binary;
}

const decimalNumber = 10;
const binaryNumber = decimalToBinary(decimalNumber);
console.log(`Decimal: ${decimalNumber} => Binary: ${binaryNumber}`);
