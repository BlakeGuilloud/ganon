const { circumferenceOfACircle } = require("../lib");

describe("circumferenceOfACircle", () => {
  test("circle with a radius of 10 to equal a circumference of 62.83", () => {
    expect(circumferenceOfACircle(10)).toBe(62.83);
  });

  test("circle with a radius of 10 (passed as string) to equal a circumference of 62.83", () => {
    expect(circumferenceOfACircle("10")).toBe(62.83);
  });

  test("circle with a radius of 'asdf' throw error 'Invalid Argument'", () => {
    expect(() => circumferenceOfACircle("asdf")).toThrow("Invalid Argument");
  });
});
