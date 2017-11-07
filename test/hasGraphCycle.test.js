const { hasGraphCycle } = require("../lib");


describe("hasGraphCycle", () => {
  test("When the graph contains a cycle, then return true", () => {

    let directedGraph =
    [
      {from: "A", to: "C"},
      {from: "B", to: "D"},
      {from: "C", to: "E"},
      {from: "D", to: "A"},
      {from: "E", to: "F"},
      {from: "F", to: "A"}
    ];

    expect(hasGraphCycle(directedGraph)).toBe(true);
  });

  test("When the graph does not contain a cycle, then return false", () => {

    let directedGraph =
    [
      {from: "A", to: "C"},
      {from: "B", to: "D"},
      {from: "C", to: "E"},
      {from: "D", to: "A"},
      {from: "E", to: "F"}
    ];
    expect(hasGraphCycle(directedGraph)).toBe(false);
  });
});