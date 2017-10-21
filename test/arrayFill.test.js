const { arrayFill } = require("../lib");

describe("arrayFill", () => {
  test("should return a new array", () => {
    var foo = [1, 6, 7, "cake"];
    var bar = arrayFill(foo, "p", 1, 3);

    expect(bar).not.toEqual(foo);
  });

  test("should fill new array", () => {
    expect(arrayFill([1,2,3,4], "r")).toEqual(["r","r","r","r"]);
  });

  test("should fill new array", () => {
    expect(arrayFill([1,2,3,4], "r", 0)).toEqual(["r","r","r","r"]);
  });

  test("should fill new array from position 0 to 2 (not including)", () => {
    expect(arrayFill([{}, null, 6, "red", 22], "r", 0, 2))
      .toEqual(["r", "r", 6, "red", 22]);
  });
});
