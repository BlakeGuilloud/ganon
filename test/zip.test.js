const { zip } = require("../lib");

describe("Zip", ()=>{
  test("Passing non lists returns empty list", () => {
    expect(zip(1, 2)).toBe([]);
    expect(zip([1], 2)).toBe([]);
    expect(zip(2, [1])).toBe([]);
  });

  test("Passing empty lists returns empty list", () => {
    expect(zip([], [])).toBe([]);
  });

  test("Zips list into pairs", () => {
    const expected = [[1,"a"], [2,"b"], [3,"c"]];
    expect(zip([1, 2, 3], ["a", "b", "c"])).toBe(expected);
  });

  test("Output is truncated to length of shorter list", () => {
    const expected = [[1,"a"], [2,"b"]];
    expect(zip([1, 2], ["a", "b", "c"])).toBe(expected);
    expect(zip([1, 2, 3], ["a", "b"])).toBe(expected);
  });
});
