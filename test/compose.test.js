const { compose } = require("../lib");


describe("compose", () => {
  it("should return a function", () => {
    expect(compose()).toBeInstanceOf(Function);
    expect(compose(x => x, x => x)).toBeInstanceOf(Function);
  });

  it("should throw an error if one of the provided arguments is not a function", () => {
    expect(() => compose(1)).toThrow();
    expect(() => compose("func")).toThrow();
    expect(() => compose()).not.toThrow();
  });

  it("should return the identity function when no functions are provided", () => {
    const value = { a: 5 };
    const composed = compose();

    expect(composed(value)).toBe(value);
  });

  it("should call all functions exactly once", () => {
    const value = { a: 5 };
    const funcs = [
      jest.fn().mockImplementation(x => x),
      jest.fn().mockImplementation(x => x),
      jest.fn().mockImplementation(x => x),
    ];

    const composed = compose(...funcs);

    funcs.forEach(func => {
      expect(func).toHaveBeenCalledTimes(0);
    });

    const result = composed(value);

    expect(result).toBe(value);

    funcs.forEach(func => {
      expect(func).toHaveBeenCalledTimes(1);
    });
  });

  it("should pipe value correctly through functions", () => {
    const funcs = [
      jest.fn().mockImplementation(x => x + 1),
      jest.fn().mockImplementation(x => x + 2),
      jest.fn().mockImplementation(x => x + 3),
    ];
    const composed = compose(...funcs);
    const result = composed(10);

    expect(result).toBe(16);

    expect(funcs[2]).toHaveBeenLastCalledWith(10);
    expect(funcs[1]).toHaveBeenLastCalledWith(11);
    expect(funcs[0]).toHaveBeenLastCalledWith(13);
  });
});
