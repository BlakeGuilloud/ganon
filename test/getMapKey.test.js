const { getMapKey } = require("../lib");
describe("getMapKey", () => {
  test("Get the third key of the given map.", () => {
    var nodes = new Map();
    nodes.set("A", { some: false, data: [] });
    nodes.set("B", { some: false, data: [] });
    nodes.set("C", { some: false, data: [] });
    nodes.set("D", { some: false, data: [] });
    nodes.set("E", { some: false, data: [] });
    nodes.set("F", { some: false, data: [] });
    expect(getMapKey(nodes,3)).toBe("C");
  });
});