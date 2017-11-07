const { repeat } = require("../lib");

describe("repeat", () => {

  test("repeat with 0 times", () => {
    const res = repeat(100, 0);
    expect(res).toEqual([]);
  });

  test("repeat with 1 times", () => {
    const res = repeat(100, 1);
    expect(res).toEqual([100]);
  });

  test("repeat with 10 times", () => {
    const res = repeat(100, 10);
    expect(res).toEqual([100, 100, 100, 100, 100, 100, 100, 100, 100, 100]);
  });

  test("repeat strings 2 times", () => {
    const res = repeat("100", 2);
    expect(res).toEqual(["100", "100"]);
  });

});
