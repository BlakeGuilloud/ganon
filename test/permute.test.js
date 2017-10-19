const { permute } = require("../lib");

describe("permute", () => {
  it("should throw when the first argument is not an array", () => {
    expect(() => permute()).toThrow();
    expect(() => permute(5)).toThrow();
    expect(() => permute([])).not.toThrow();
  });

  it("should return an empty array when an empty array is supplied", () => {
    const result = permute([]);

    expect(result).toEqual([]);
  });

  it("should return array with one element (the input) when given an iterable of size 1", () => {
    expect(permute([1])).toEqual([[1]]);
  });

  it("should return all permutations when given an array", () => {
    const cases = [
      {
        input: [1, 2],
        outputs: [[1, 2], [2, 1]]
      },
      {
        input: [1, 2, 3],
        outputs: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
      }
    ];
    cases.forEach(({ input, outputs }) => {
      const actualOutput = permute(input);
      outputs.forEach(output => {
        expect(actualOutput).toContainEqual(output);
      });
    });
  });
});
