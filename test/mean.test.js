const { mean } = require("../lib");

describe("mean", () => {
  test("mean of 1,  2 to equal 1.5", () => {
    expect(mean(1, 2)).toBe(1.5);
  });

  test("mean of 2, 4 to equal 3", () => {
    expect(mean(2, 4)).toBe(3);
  });

  test("mean of -2, 4 to equal 1", () => {
    expect(mean(-2, 4)).toBe(1);
  });

  test("mean of 0, 0 to equal 0", () => {
    expect(mean(0, 0)).toBe(0);
  });

  test("mean of -3, -6 to equal -4.5", () => {
    expect(mean(-3, -6)).toBe(-4.5);
  });
});
