/**
 * Unit tests for calculator.js
 *
 * Covers all arithmetic operations:
 *   - add        (+):  addition
 *   - subtract   (-):  subtraction
 *   - multiply   (*):  multiplication
 *   - divide     (/):  division (including edge case: division by zero)
 *   - modulo     (%):  remainder (including edge case: modulo by zero)
 *   - power      (**): exponentiation
 *   - squareRoot (√):  square root (including edge case: negative number)
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require("../calculator");

// --- Addition ---
describe("add", () => {
  // Example from image: 2 + 3 = 5
  test("2 + 3 = 5", () => expect(add(2, 3)).toBe(5));

  test("adds positive integers", () => expect(add(10, 20)).toBe(30));
  test("adds negative numbers", () => expect(add(-4, -6)).toBe(-10));
  test("adds a positive and a negative number", () => expect(add(7, -3)).toBe(4));
  test("adds floats", () => expect(add(1.5, 2.5)).toBe(4));
  test("adds zero", () => expect(add(0, 5)).toBe(5));
  test("adds two zeros", () => expect(add(0, 0)).toBe(0));
});

// --- Subtraction ---
describe("subtract", () => {
  // Example from image: 10 - 4 = 6
  test("10 - 4 = 6", () => expect(subtract(10, 4)).toBe(6));

  test("subtracts positive integers", () => expect(subtract(20, 8)).toBe(12));
  test("subtracts resulting in a negative", () => expect(subtract(3, 9)).toBe(-6));
  test("subtracts negative numbers", () => expect(subtract(-5, -3)).toBe(-2));
  test("subtracts floats", () => expect(subtract(5.5, 2.5)).toBe(3));
  test("subtracts zero", () => expect(subtract(7, 0)).toBe(7));
});

// --- Multiplication ---
describe("multiply", () => {
  // Example from image: 45 * 2 = 90
  test("45 * 2 = 90", () => expect(multiply(45, 2)).toBe(90));

  test("multiplies positive integers", () => expect(multiply(6, 7)).toBe(42));
  test("multiplies by zero", () => expect(multiply(99, 0)).toBe(0));
  test("multiplies negative numbers", () => expect(multiply(-3, -4)).toBe(12));
  test("multiplies a positive and a negative number", () => expect(multiply(5, -6)).toBe(-30));
  test("multiplies floats", () => expect(multiply(2.5, 4)).toBe(10));
  test("multiplies by one (identity)", () => expect(multiply(8, 1)).toBe(8));
});

// --- Division ---
describe("divide", () => {
  // Example from image: 20 / 5 = 4
  test("20 / 5 = 4", () => expect(divide(20, 5)).toBe(4));

  test("divides positive integers", () => expect(divide(10, 2)).toBe(5));
  test("divides resulting in a float", () => expect(divide(7, 2)).toBe(3.5));
  test("divides negative numbers", () => expect(divide(-12, -4)).toBe(3));
  test("divides a negative by a positive", () => expect(divide(-9, 3)).toBe(-3));
  test("divides by one (identity)", () => expect(divide(15, 1)).toBe(15));
  test("divides zero by a number", () => expect(divide(0, 5)).toBe(0));

  // Edge case: division by zero
  test("throws an error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed");
  });
  test("throws an error when dividing zero by zero", () => {
    expect(() => divide(0, 0)).toThrow("Division by zero is not allowed");
  });
});

// --- Modulo ---
describe("modulo", () => {
  // Example from image: 5 % 2 = 1
  test("5 % 2 = 1", () => expect(modulo(5, 2)).toBe(1));

  test("returns zero when evenly divisible", () => expect(modulo(10, 5)).toBe(0));
  test("returns remainder for larger divisor", () => expect(modulo(3, 7)).toBe(3));
  test("works with negative dividend", () => expect(modulo(-7, 3)).toBe(-1));
  test("works with negative divisor", () => expect(modulo(7, -3)).toBe(1));
  test("works with floats", () => expect(modulo(5.5, 2)).toBeCloseTo(1.5));
  test("zero modulo a number is zero", () => expect(modulo(0, 4)).toBe(0));

  // Edge case: modulo by zero
  test("throws an error when modulo by zero", () => {
    expect(() => modulo(10, 0)).toThrow("Modulo by zero is not allowed");
  });
});

// --- Power ---
describe("power", () => {
  // Example from image: 2 ^ 3 = 8
  test("2 ^ 3 = 8", () => expect(power(2, 3)).toBe(8));

  test("raises to a larger exponent", () => expect(power(2, 8)).toBe(256));
  test("any number to the power of 0 is 1", () => expect(power(99, 0)).toBe(1));
  test("any number to the power of 1 is itself", () => expect(power(7, 1)).toBe(7));
  test("works with negative exponent", () => expect(power(2, -1)).toBe(0.5));
  test("works with fractional exponent (square root)", () => expect(power(9, 0.5)).toBe(3));
  test("works with a base of zero", () => expect(power(0, 5)).toBe(0));
  test("works with a negative base and odd exponent", () => expect(power(-2, 3)).toBe(-8));
});

// --- Square Root ---
describe("squareRoot", () => {
  // Example from image: √16 = 4
  test("√16 = 4", () => expect(squareRoot(16)).toBe(4));

  test("√144 = 12", () => expect(squareRoot(144)).toBe(12));
  test("√0 = 0", () => expect(squareRoot(0)).toBe(0));
  test("√1 = 1", () => expect(squareRoot(1)).toBe(1));
  test("√2 returns an irrational float", () => expect(squareRoot(2)).toBeCloseTo(1.41421, 5));
  test("√0.25 = 0.5", () => expect(squareRoot(0.25)).toBe(0.5));

  // Edge case: square root of a negative number
  test("throws an error for a negative number", () => {
    expect(() => squareRoot(-9)).toThrow("Square root of a negative number is not allowed");
  });
  test("throws an error for -1", () => {
    expect(() => squareRoot(-1)).toThrow("Square root of a negative number is not allowed");
  });
});
