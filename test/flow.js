const { flow } = require("../lib");

const value = { a: 5 };

describe("flow", () => {
  it("should return the identity function when no functions are provided", () => {
    const composed = flow();

    expect(composed(value)).toBe(value);
  });

  it("should call all functions exactly once", () => {
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
});
