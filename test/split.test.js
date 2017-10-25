const { split } = require("../lib");

describe("split", () => {
  it("works on the empty list", () => {
    expect(split([])).toEqual({fst: [], snd: []});
  });

  it("works on a singleton", () => {
    expect(split([1])).toEqual({fst: [1], snd: []});
  });

  it("works on bigger lists", () => {
    expect(split([1,2])).toEqual({fst: [1], snd: [2]});
    expect(split([1,2,6])).toEqual({fst: [1,2], snd: [6]});
    expect(split([1,1,2,3,5,8,13])).toEqual({fst: [1,1,2,3], snd: [5,8,13]});
  });

  it("should throw an error if arr is not an array", () => {
    expect(() => split(false)).toThrow();
    expect(() => split(null)).toThrow();
    expect(() => split(-5)).toThrow();
    expect(() => split({})).toThrow();
    expect(() => split("five")).toThrow();
  });
});
