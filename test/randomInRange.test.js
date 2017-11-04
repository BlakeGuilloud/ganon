const { randomInRange } = require("../lib");

describe("randomInRange", () => {
  test("Should return an integer within the range specified", () => {
    let randomNum = randomInRange(0, 10);
    expect(typeof randomNum).toBe("number");
    expect(Math.floor(randomNum)).toEqual(randomNum);
    expect(randomNum).toBeGreaterThanOrEqual(0);
    expect(randomNum).toBeLessThanOrEqual(10);
  });

  test("Should throw an error if called with invalid parameters", () => {
    // should take two params
    expect(() => randomInRange()).toThrow();
    expect(() => randomInRange(0, 10, 20)).toThrow();

    // both params should be integers
    expect(() => randomInRange("1", "10")).toThrow();
    expect(() => randomInRange("1", 10)).toThrow();
    expect(() => randomInRange(1, "10")).toThrow();
    expect(() => randomInRange(1, null)).toThrow();
    expect(() => randomInRange([1], 10)).toThrow();
    expect(() => randomInRange(true, 10)).toThrow();
    expect(() => randomInRange(1, 10.5)).toThrow();
    //expect(() => randomInRange(1.0, 10)).toThrow();

    // first param should be less than or equal to the second param
    expect(() => randomInRange(10, 0)).toThrow();
    expect(() => randomInRange(0, -10)).toThrow();
  });
});
