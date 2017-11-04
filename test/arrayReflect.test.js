const { arrayReflect } = require("../lib");

describe("arrayReflect", () => {
  it("Should return a new Array", () => {
    let arr = [4, "Nine"];
    let arr2 = [];

    expect(arrayReflect(arr)).not.toBe(arr);
    expect(arrayReflect(arr2)).not.toBe(arr2);
  });

  it("Should return a reflected Array", () => {
    expect(arrayReflect([])).toEqual([]);
    expect(arrayReflect([""])).toEqual(["",""]);
    expect(arrayReflect([1,2])).toEqual([1,2,2,1]);
    expect(arrayReflect([1, ["foo", 77]]))
      .toEqual([1, ["foo", 77], ["foo", 77], 1]);
  });

  it("Should throw when an Array is not passed as a parameter", () => {
    expect(() => arrayReflect("foo")).toThrow();
  });
});
