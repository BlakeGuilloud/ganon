const { shannonEntropy } = require("../lib");

describe("shannonEntropy", () => {

  test("should correctly calculate value from example", () => {
    expect(shannonEntropy([1, 2, 3]))
      .toBeCloseTo(Math.log(3) / Math.log(2), 7);

    expect(shannonEntropy([1, 2, 3], Math.E))
      .toBeCloseTo(Math.log(3), 7);

    expect(shannonEntropy([1, 2, 3], 10))
      .toBeCloseTo(Math.log(3) / Math.log(10), 7);
  });

  test("should correctly handle duplicates", () => {
    expect(shannonEntropy([1, 2, 2, 3])).toBe(1.5);

    expect(shannonEntropy([1, 2, 2, 3], Math.E))
      .toBeCloseTo(1.5 * Math.log(2), 7);

    expect(shannonEntropy([1, 2, 2, 3], 10))
      .toBeCloseTo(1.5 * Math.log(2) / Math.log(10), 7);
  });

  test("should correctly handle inputs that are Maps", () => {
    expect(shannonEntropy(new Map([["a", 1 / 3], ["b", 2 / 3]])))
      .toBeCloseTo((1 / 3) * Math.log(27 / 4) / Math.log(2), 7);

    expect(shannonEntropy(new Map([["a", 1 / 3], ["b", 2 / 3]]), Math.E))
      .toBeCloseTo((1 / 3) * Math.log(27 / 4), 7);

    expect(shannonEntropy(new Map([["a", 1 / 3], ["b", 2 / 3]]), 10))
      .toBeCloseTo((1 / 3) * Math.log(27 / 4) / Math.log(10), 7);
  });

  test("should throw exception if input's probabilities don't sum to 1", () => {
    expect(() => shannonEntropy(new Map([["a", 1], ["b", 2]])))
      .toThrow("Given probabilities don't add up to 1!");
  });

});
