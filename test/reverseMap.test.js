const { reverseMap } = require("../lib");

describe("reverseMap", () => {
  describe("with an empty map", () => {
    test("should return an empty map", () => {
      const map = new Map();
      expect(reverseMap(map)).toEqual(map);
    });
  });

  describe("with a non-empty map", () => {
    test("should return a reversed map", () => {
      const map = new Map([["key1", "value1"], ["key2", "value2"]]);
      for (let [key, value] of reverseMap(map).entries()) {
        expect(key).toBe(map.get(value));
      }
    });

    test("should return a reversed map from a map with mixed values", () => {
      const map = new Map([["foo", "bar"],["star", 1]]);
      for (let [key, value] of reverseMap(map).entries()) {
        expect(key).toBe(map.get(value));
      }
    });

    test("should return a reversed map from a larger map of mixed values", () => {
      const map = new Map([["43", "bing"], ["Ping", { "foo": [1,2,{}]}]]);
      for (let [key, value] of reverseMap(map).entries()) {
        expect(key).toBe(map.get(value));
      }
    });
  });
});
