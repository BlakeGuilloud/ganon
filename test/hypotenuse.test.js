const { hypotenuse } = require("../lib");

describe("hypotenuse", () => {
  test("hypotenuse(1, 2) is equal to 2.24", () => {
    expect(hypotenuse(1, 2)).toBe(2.24);
  });

  test("hypotenuse(3, 4) is equal to 5", () => {
    expect(hypotenuse(3, 4)).toBe(5);
  });

  test("hypotenuse(20, 21) is equal to 29", () => {
    expect(hypotenuse(20, 21)).toBe(29);
  });

  test("hypotenuse(3, 3) is equal to 4.24", () => {
    expect(hypotenuse(3, 3)).toBe(4.24);
  });
});
