const { partial } = require("../lib");

describe("partial", () => {
  test("should return a function", () => {
    expect(partial(() => {})).toBeDefined();
    expect(partial(() => {})).toBeInstanceOf(Function);
    expect(partial(x => x, 9)).toBeInstanceOf(Function);
    expect(partial((x, y) => x * y, 9, 9)).toBeInstanceOf(Function);
  });

  test("should throw an error if argument 1 is not a function", () => {
    expect(() => partial()).toThrow();
    expect(() => partial("[Function]", x => x)).toThrow();
    expect(() => partial(1, x => x)).toThrow();
  });

  test("it should have same effect as original function when no fixed arguments are passed", () => {
    expect(partial(x => x)(5)).toBe(5);
    expect(partial([].reduce)()).toThrow();
  });

  test("it should call the function exactly once", () => {
    const f = jest.fn();

    const argLists = [
      [],
      [1],
      ["foo", 4, 3, "bar"]
    ];

    argLists.forEach(args => {
      const g = partial.apply(null, [f, ...args]);
      expect(f).toHaveBeenCalledTimes(0);

      g();

      expect(f).toHaveBeenCalledTimes(1);

      const expected = expect(f);
      expected.toHaveBeenWith.apply(expected, args);
    });
  });

  test("it should return the function's return value", () => {
    const value = { a: 5};
    expect(partial(x => x)(value)).toBe(value);
    expect(partial(x => undefined)).toBeUndefined();
  });
});