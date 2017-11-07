const { arrayShape } = require("../lib");

describe("arrayShape", () => {
  it("should return arr param, when it is not an Array or String", () => {
    let obj = { size: 4 };
    let num = 18;
    let nu = null;
    let pos = true;

    expect(arrayShape(obj)).toBe(obj);
    expect(arrayShape(num)).toBe(num);
    expect(arrayShape(nu)).toBe(nu);
    expect(arrayShape(pos)).toBe(pos);
  });

  it("should return orginal array when breadth or depth are negative", () => {
    let arr = [1, 2, 3];

    expect(arrayShape(arr, -1)).toBe(arr);
    expect(arrayShape(arr, 2, -100)).toBe(arr);
    expect(arrayShape(arr, -4, -1)).toBe(arr);
  });

  it("should return orginal array clone", () => {
    let arr = [1, 2, 3];

    expect(arrayShape(arr, 3, 0)).toEqual(arr);
    expect(arrayShape(arr, 3)).not.toBe(arr);
  });

  it("should return defaultVal when Array element is undefined", () => {
    let arr = [1, 2, 3, null, false];
    let shapedArr = [1, 2, 3, null, false, "foo", "foo", "foo"];
    let shapedArr2D = [
      [1, 0, 0],
      [2, 0, 0],
      [3, 0, 0],
      [null, 0, 0],
      [false, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];

    expect(arrayShape(arr, 8, 0, "foo")).toEqual(shapedArr);
    expect(arrayShape(arr, 8, 3, 0)).toEqual(shapedArr2D);
  });

  it("should truncate nested arrays when depth is < array.length", () => {
    let arr = [
      [1, 2, 3], 77, [2, 3, 4],
      ["b", "r", {}, null]
    ];
    let shapedArr = [
      [1, 2],
      [77, 1],
      [2, 3],
      ["b", "r"],
      [1, 1],
      [1, 1],
      [1, 1]
    ];

    expect(arrayShape(arr, 7, 2, 1)).toEqual(shapedArr);
  });

  it("should truncate nested arrays when breadth is < array.length", () => {
    let arr = [1,2];

    expect(arrayShape(arr, 1)).toEqual([1]);
  });
});
