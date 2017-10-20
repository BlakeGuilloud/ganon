const { pipe } = require("../lib");


describe("pipe", () => {
  it("should return a function", () => {
    expect(pipe()).toBeInstanceOf(Function);
    expect(pipe(5)).toBeInstanceOf(Function);
  });

  it("should throw an error if one of the provided arguments is not a function", () => {
    expect(() => pipe(1)(1)).toThrow();
    expect(() => pipe(1)("func")).toThrow();
    expect(() => pipe(1)()).not.toThrow();
  });

  it("should return the identity function when no functions are provided", () => {
    const value = { a: 5 };
    const piped = pipe(value)();

    expect(piped).toBe(value);
  });

  it("should call all functions exactly once", () => {
    const value = { a: 5 };
    const funcs = [
      jest.fn().mockImplementation(x => x),
      jest.fn().mockImplementation(x => x),
      jest.fn().mockImplementation(x => x),
    ];
    const piped = pipe(value)(...funcs);

    expect(piped).toBe(value);

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
    const piped = pipe(10)(...funcs);

    expect(piped).toBe(16);

    expect(funcs[0]).toHaveBeenLastCalledWith(10);
    expect(funcs[1]).toHaveBeenLastCalledWith(11);
    expect(funcs[2]).toHaveBeenLastCalledWith(13);
  });
});
