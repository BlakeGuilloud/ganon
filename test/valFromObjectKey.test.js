const { valFromObjectKey } = require("../lib");

describe("valFromObjectKey", () => {
  test("if null given as an object then return null", () => {
    expect(valFromObjectKey(null, "name")).toBe(null);
  });
  test("if not an object given then return null", () => {
    expect(valFromObjectKey(["asas"], "name")).toBe(null);
  });
  test("if keytofind is null or empty then return empty array", () => {
    expect(valFromObjectKey({"name": "hans"}, "")).toBe([]);
  });
  test("if the object does not contain searched key", () => {
    expect(valFromObjectKey({"name": "hans"}, "address")).toBe([]);
  });
  test("when the object is not nested", () => {
    expect(valFromObjectKey({"name": "hans", "address": "citraland"}, "name")).toBe(["hans"]);
  });
  test("when the object is nested 1 level", () => {
    expect(valFromObjectKey({"human":{"name": "michael"}, "dog":{"name": "james"}, "cat":{"name": "patt"}}, "name")).toBe(["michael", "james", "patt"]);
  });
  test("when the object is nested more than 1 level", () => {
    expect(valFromObjectKey({"book":{"book": ""}}, "book", "book")).toBe([{"book":""}, ""]);
  });
});

