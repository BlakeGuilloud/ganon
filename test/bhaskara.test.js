const { bhaskara } = require("../lib");

describe("bhaskara", () => {

  test("Should return the single result to bhaskara when delta is zero", () => {
    expect(bhaskara(1, 2, 1)).toEqual(-1);
  });
  test("Should return the tuple results to bhaskara when delta more than zero", () => {
    expect(bhaskara(1, 8, -9)).toEqual([1, -9]);
  });

  test("Should throw an error if called with incorrect params", () => {
    expect(() => bhaskara()).toThrow();
    expect(() => bhaskara(1, "2")).toThrow();
    expect(() => bhaskara(1, [2])).toThrow();
    expect(() => bhaskara(1, undefined, 45)).toThrow();
    expect(() => bhaskara(1, null, 10)).toThrow();
    expect(() => bhaskara(0, -1, 1)).toThrow();
    expect(() => bhaskara(2, 2, 1)).toThrow();
    expect(() => bhaskara(1, 2)).toThrow();
  });
});
