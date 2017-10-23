const { compact } = require("../lib");

describe("compact", () => {
  test("returns array", () => {
    expect(compact()).toEqual([]);
  });

  test("returns copy of passed array", () => {
    const array = ["item"];
    expect(compact(array)).not.toBe(array);
  });


  test("removes false from array", () => {
    expect(compact([1, 2, false, 4])).toEqual([1, 2, 4]);
  });

  test("removes null from array", () => {
    expect(compact(["i", null, "m", "not", "null"])).toEqual(["i", "m", "not", "null"]);
  });

  test("removes undefined from array", () => {
    expect(compact([undefined, "all", undefined, "defined", "here"])).toEqual(["all", "defined", "here"]);
  });

  test("removes 0 from array", () => {
    expect(compact([21, 0, 0, 0, 0, 0, 0, 0, 12])).toEqual([21, 12]);
  });

  test("removes NaN from array", () => {
    expect(compact(["number", NaN, 12, "string", NaN, "NaN"])).toEqual(["number", 12, "string", "NaN"]);
  });

  test("removes empty strings from array", () => {
    expect(compact(["FM", "", "", "ATTACK", "SLEEPLESS NIGHTS", ""])).toEqual(["FM", "ATTACK", "SLEEPLESS NIGHTS"]);
  });
});