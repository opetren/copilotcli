#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supports the following arithmetic operations:
 *   - add        (+):  Sum two numbers
 *   - subtract   (-):  Subtract one number from another
 *   - multiply   (*):  Multiply two numbers
 *   - divide     (/):  Divide one number by another (handles division by zero)
 *   - modulo     (%):  Return the remainder of a divided by b (handles modulo by zero)
 *   - power      (**): Raise base to the given exponent
 *   - squareRoot (√):  Return the square root of n (handles negative numbers)
 *
 * Usage:
 *   node calculator.js <operation> <num1> [num2]
 *
 * Examples:
 *   node calculator.js add 5 3        # Output: 8
 *   node calculator.js subtract 9 4   # Output: 5
 *   node calculator.js multiply 6 7   # Output: 42
 *   node calculator.js divide 10 2    # Output: 5
 *   node calculator.js modulo 10 3    # Output: 1
 *   node calculator.js power 2 8      # Output: 256
 *   node calculator.js squareRoot 144 # Output: 12
 */

// Supported operations: addition, subtraction, multiplication, division,
// modulo, exponentiation, and square root
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  },
  // Returns the remainder of a divided by b
  modulo: (a, b) => {
    if (b === 0) {
      throw new Error("Modulo by zero is not allowed");
    }
    return a % b;
  },
  // Returns base raised to the power of exponent
  power: (base, exponent) => base ** exponent,
  // Returns the square root of n; throws for negative inputs
  squareRoot: (n) => {
    if (n < 0) {
      throw new Error("Square root of a negative number is not allowed");
    }
    return Math.sqrt(n);
  },
};

module.exports = operations;

/* istanbul ignore next */
if (require.main === module) {
const [, , operation, num1, num2] = process.argv;

if (!operation || num1 === undefined) {
  console.error(
    "Usage: node calculator.js <operation> <num1> [num2]\n" +
      "Operations: add, subtract, multiply, divide, modulo, power, squareRoot"
  );
  process.exit(1);
}

if (!operations[operation]) {
  console.error(
    `Unknown operation: "${operation}". Supported: add, subtract, multiply, divide, modulo, power, squareRoot`
  );
  process.exit(1);
}

const a = parseFloat(num1);
const b = num2 !== undefined ? parseFloat(num2) : undefined;

if (isNaN(a) || (b !== undefined && isNaN(b))) {
  console.error("Arguments must be valid numbers.");
  process.exit(1);
}

try {
  const result = operation === "squareRoot"
    ? operations[operation](a)
    : operations[operation](a, b);
  console.log(result);
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
}
