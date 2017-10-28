const { hypotenuse } = require("../lib");

describe("hypotenuse", () => {
  test("hypotenuse(1, 2) is close to 2.24", () => {
    expect(hypotenuse(1, 2)).toBeCloseTo(2.24);
  });

  test("hypotenuse(3, 4) is close to 5", () => {
    expect(hypotenuse(3, 4)).toBeCloseTo(5);
  });

  test("hypotenuse(20, 21) is close to 29", () => {
    expect(hypotenuse(20, 21)).toBeCloseTo(29);
  });

  test("hypotenuse(3, 3) is close to 4.24", () => {
    expect(hypotenuse(3, 3)).toBeCloseTo(4.24);
  });

  test("hypotenuse(-3, -4) is close to 5", () => {
    expect(hypotenuse(-3, -4)).toBeCloseTo(5);
  });

  test("hypotenuse(1, NaN) is Nan", () => {
    expect(hypotenuse(1, NaN)).toBeNaN();
  });

  test("hypotenuse(1, +Infinity) is +Infinity", () => {
    expect(hypotenuse(1, +Infinity)).toBe(+Infinity);
  });

  test("hypotenuse(1, -Infinity) is +Infinity", () => {
    expect(hypotenuse(1, -Infinity)).toBe(+Infinity);
  });
});
