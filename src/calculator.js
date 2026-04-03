#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supports the following basic arithmetic operations:
 *   - add      (+): Sum two numbers
 *   - subtract (-): Subtract one number from another
 *   - multiply (*): Multiply two numbers
 *   - divide   (/): Divide one number by another (handles division by zero)
 *
 * Usage:
 *   node calculator.js <operation> <num1> <num2>
 *
 * Examples:
 *   node calculator.js add 5 3        # Output: 8
 *   node calculator.js subtract 9 4   # Output: 5
 *   node calculator.js multiply 6 7   # Output: 42
 *   node calculator.js divide 10 2    # Output: 5
 */

// Supported operations: addition, subtraction, multiplication, division
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
};

module.exports = operations;

/* istanbul ignore next */
if (require.main === module) {
const [, , operation, num1, num2] = process.argv;

if (!operation || num1 === undefined || num2 === undefined) {
  console.error(
    "Usage: node calculator.js <operation> <num1> <num2>\n" +
      "Operations: add, subtract, multiply, divide"
  );
  process.exit(1);
}

if (!operations[operation]) {
  console.error(
    `Unknown operation: "${operation}". Supported: add, subtract, multiply, divide`
  );
  process.exit(1);
}

const a = parseFloat(num1);
const b = parseFloat(num2);

if (isNaN(a) || isNaN(b)) {
  console.error("Both arguments must be valid numbers.");
  process.exit(1);
}

try {
  const result = operations[operation](a, b);
  console.log(result);
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
}
