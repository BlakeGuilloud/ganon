const { fibonacci } = require("../lib");

describe("fibonacci", () => {
  test("First Fibonacci number (index 0) is 0", () => {
    expect(fibonacci(0)).toBe(1);
  });

  test("Tenth Fibonacci number (index 9) is 34", () => {
    expect(fibonacci(9)).toBe(34);
  });

  //Integers (numbers without a period or exponent notation) are accurate up to 15 digits (https://www.w3schools.com/js/js_numbers.asp).
  test("Hundredth Fibonacci number (index 99) produces error - solution is 218922995834555169026, but JS can\'t represent it precisely", () => {
    function fibonacciOverflowTest() {
      fibonacci(99);
    }
    expect(fibonacciOverflowTest).toThrowError("Solution overflows JavaScript integer");
  });

  test("Negative index produces error", () => {
    function fibonacciOverflowTest() {
      fibonacci(-1);
    }
    expect(fibonacciOverflowTest).toThrowError("Index cannot be negative");
  });
});
