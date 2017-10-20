const { flow } = require("../lib");


describe("flow", () => {
  it("should return a function", () => {
    expect(flow()).toBeInstanceOf(Function);
    expect(flow(x => x, x => x)).toBeInstanceOf(Function);
  });

  it("should throw an error if one of the provided arguments is not a function", () => {
    expect(() => flow(1)).toThrow();
    expect(() => flow("func")).toThrow();
    expect(() => flow()).not.toThrow();
  });

  it("should return the identity function when no functions are provided", () => {
    const value = { a: 5 };
    const composed = flow();

    expect(composed(value)).toBe(value);
  });

  it("should call all functions exactly once", () => {
    const value = { a: 5 };
    const funcs = [
      jest.fn().mockImplementation(x => x),
      jest.fn().mockImplementation(x => x),
      jest.fn().mockImplementation(x => x),
    ];

    const composed = flow(...funcs);

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
    const composed = flow(...funcs);
    const result = composed(10);

    expect(result).toBe(16);

    expect(funcs[0]).toHaveBeenLastCalledWith(10);
    expect(funcs[1]).toHaveBeenLastCalledWith(11);
    expect(funcs[2]).toHaveBeenLastCalledWith(13);
  });
});
