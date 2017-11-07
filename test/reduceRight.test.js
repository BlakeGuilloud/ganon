const { reduceRight } = require("../lib");

describe("reduceRight", () => {
  test("should throw if list is not an array", () => {
    expect(() => reduceRight()).toThrow();
    expect(() => reduceRight("list")).toThrow();
    expect(() => reduceRight(1157)).toThrow();
    expect(() => reduceRight({})).toThrow();
  });

  test("should throw if iteratee is not a function", () => {
    expect(() => reduceRight([1, 2])).toThrow();
    expect(() => reduceRight([1, 2], "iteratee")).toThrow();
  });

  test("should reduce array", () => {
    expect(reduceRight([1, 2, 3], (memo, item) => memo + item, 0)).toBe(6);
  });

  test("should reduce it from right to left", () => {
    expect(reduceRight(["a", "b", "c"], (memo, item) => memo.concat(item), "")).toBe("cba");
  });
});
