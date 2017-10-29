const { prime } = require("../lib");

describe("prime", () => {
  test("return the first prime number", () => {
    expect(prime(1)).toBe(2);
  });

  test("return the second prime number", () => {
    expect(prime(2)).toBe(3);
  });

  test("return the fifth prime number", () => {
    expect(prime(5)).toBe(11);
  });

  test("return the tenth prime number", () => {
    expect(prime(10)).toBe(29);
  });
});
