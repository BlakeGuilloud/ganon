const { secondLargest } = require("../lib");

describe("secondLargest", () => {
  test("Get the second largest number (111)", () => {
    expect(secondLargest([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100])).toBe(111);
  });

  test("Get the second largest number (7)", () => {
    expect(secondLargest([2, 4, 5, 7, 9, 3])).toBe(7);
  });
});
