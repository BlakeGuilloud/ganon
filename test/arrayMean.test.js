const {arrayMean} = require("../lib");

describe("arrayMean", ()=>{

  test("yields result when array is valid", ()=>{
    expect(arrayMean([])).toBe(0);
    expect(arrayMean([10])).toBe(10);
    expect(arrayMean([1,2,3,4,5])).toBe(3);
    expect(arrayMean([151,3,56,76,4,3])).toBe(48.83);
    expect(arrayMean([23.23,567,245.7,778.2,55,35,4])).toBe(244.02);
  });

  test("Throws exception for invalid arguments", () => {
    expect(() => arrayMean(["a","b","c"])).toThrow("Invalid Argument");
    expect(() => arrayMean([1,"hello","3",5])).toThrow("Invalid Argument");
    expect(() => arrayMean(["c", NaN, undefined, 7])).toThrow("Invalid Argument");
  });

  test("Throws exception for invalid type", () => {
    expect(() => arrayMean(7)).toThrow("Invalid Type");
    expect(() => arrayMean("Test")).toThrow("Invalid Type");
    expect(() => arrayMean(undefined)).toThrow("Invalid Type");
  });

});