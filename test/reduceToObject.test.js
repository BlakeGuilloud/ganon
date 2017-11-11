const { reduceToObject } = require("../lib");

describe("reduceToObject", () => {
  test("Should return an error", () => {
    expect(reduceToObject(NaN)).toThrow("Invalid Input");
    expect(reduceToObject([])).toThrow("Invalid Input");
    expect(reduceToObject(null)).toThrow("Invalid Input");
    expect(reduceToObject("fff")).toThrow("Invalid Input");
    expect(reduceToObject(55)).toThrow("Invalid Input");
    expect(reduceToObject([5, "ffff", 13, 30, 20])).toThrow("Invalid Input");
    expect(reduceToObject(["fff", "kangaroo", 10, 115])).toThrow("Invalid Input");
    expect(reduceToObject(["fff", 115])).toThrow("Invalid Input");
  });
  test("Should return an object with correct keys/values", () => {
    for(let i = 0; i < 5; i++) {
      let obj = Array.from({length: 20}, () => Math.floor(Math.random() * 40));
      let rst = obj.reduce((accum , value, index) => {
        accum[index] = value;
        return accum;}, {});
      expect(reduceToObject(obj)).toEqual(rst);
    }
  });
});
