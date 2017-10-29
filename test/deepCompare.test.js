const { deepCompare } = require("../lib");

describe("deepCompare", () => {
  test("objects are equal", () => {
    expect(
      deepCompare(
        { a: "a", b: { c: { d: "d" }, e: "e" } },
        { a: "a", b: { c: { d: "d" }, e: "e" } }
      )
    ).toBe(true);
    expect(
      deepCompare(
        { a: 0, b: { c: { d: 1.8 }, e: 2.9 } },
        { a: 0, b: { c: { d: 1.8 }, e: 2.9 } }
      )
    ).toBe(true);
    expect(
      deepCompare(
        { a: [0], b: { c: { d: [{ o: "o" }] }, e: [1, 9, "test"] } },
        { a: [0], b: { c: { d: [{ o: "o" }] }, e: [1, 9, "test"] } }
      )
    ).toBe(true);
  });

  test("objects are not equal", () => {
    expect(
      deepCompare(
        { a: "a", b: { c: { d: "d" }, e: null } },
        { a: "a", b: { c: { d: "d" }, e: undefined } }
      )
    ).toBe(false);
    expect(
      deepCompare(
        { a: "a", b: { c: { d: "d" }, e: "e" } },
        { a: "a", b: { c: { d: "d" }, e: "z" } }
      )
    ).toBe(false);
    expect(
      deepCompare(
        { a: 0, b: { c: { d: 1.8 }, e: 2.9 } },
        { a: 0, b: { c: { d: "1.8" }, e: 2.9 } }
      )
    ).toBe(false);
    expect(
      deepCompare(
        { a: [0], b: { c: { d: [{ o: "o" }] }, e: [1, 9, "test"] } },
        { a: [0], b: { c: { d: ["o"] }, e: ["test", 9, 1] } }
      )
    ).toBe(false);
  });

  test("equivalence asserted without top-level objects", () => {
    expect(deepCompare(1, 1)).toBe(true);
    expect(deepCompare("not deep", "not deep")).toBe(true);
    expect(deepCompare([1, 2], [1, 2])).toBe(true);
  });

  test("null, undefined, and empty states are not equal", () => {
    expect(deepCompare(null, undefined)).toBe(false);
    expect(deepCompare(null, null)).toBe(true);
    expect(deepCompare(undefined, undefined)).toBe(true);
    expect(deepCompare([], {})).toBe(false);
    expect(deepCompare(false, null)).toBe(false);
    expect(deepCompare(undefined, false)).toBe(false);
  });
});
