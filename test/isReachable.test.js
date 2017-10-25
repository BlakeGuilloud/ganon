const { isReachable } = require("../lib");
const directedGraph =
[
  {from: "A", to: "C"},
  {from: "B", to: "D"},
  {from: "C", to: "E"},
  {from: "D", to: "A"},
  {from: "E", to: "F"}
];

describe("isReachable", () => {
  test("returns true if destination is reachable", () => {
    expect(isReachable(directedGraph, "A", "E")).toBe(true);
    expect(isReachable(directedGraph, "A", "F")).toBe(true);
    expect(isReachable(directedGraph, "B", "F")).toBe(true);
  });

  test("returns false if destination is unreachable", () => {
    expect(isReachable(directedGraph, "A", "B")).toBe(false);
    expect(isReachable(directedGraph, "D", "B")).toBe(false);
    expect(isReachable(directedGraph, "E", "C")).toBe(false);
  });
});