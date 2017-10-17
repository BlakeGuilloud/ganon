const { combinations } = require('../lib');

describe('combinations', () => {
  it('should throw when the first argument is not an array', () => {
    expect(() => combinations()).toThrow();
    expect(() => combinations(5)).toThrow();
  });

  it('should throw when the second argument is not a positive number', () => {
    expect(() => combinations([])).toThrow();
    expect(() => combinations([], 'a')).toThrow();
    expect(() => combinations([], -1)).toThrow();
    expect(() => combinations([], 1)).not.toThrow();
  });

  it('should return an empty array when an empty array is supplied or n is zero', () => {
    expect(combinations([], 1)).toEqual([]);
    expect(combinations([1], 0)).toEqual([]);
  });

  it('should return array with arrays for each item in the list when n is one', () => {
    const array = [1, 2, 3];
    const result = combinations(array, 1);

    array.forEach(i => expect(result).toContainEqual([i]));
  });

  it('should return all combinations when given an array and a number', () => {
    const cases = [
      {
        input: [[1, 2, 3], 2],
        outputs: [[1, 2], [1, 3], [2, 3]]
      },
      {
        input: [[1, 2, 3, 4], 2],
        outputs: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
      },
      {
        input: [[1, 2, 3, 4], 3],
        outputs: [[1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]
      }
    ];
    cases.forEach(({ input, outputs }) => {
      const expectedOutput = combinations(...input);
      outputs.forEach(output => {
        expect(expectedOutput).toContainEqual(output);
      });
    });
  });
})
