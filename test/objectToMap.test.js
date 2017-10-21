const { objectToMap } = require("../lib");

describe("objectToMap", () => {
  it("should throw an error when first argument is not of type Object", () => {
    expect(() => objectToMap("f")).toThrow();
    expect(() => objectToMap(5)).toThrow();
    expect(() => objectToMap("foo")).toThrow();
    expect(() => objectToMap(new Set())).toThrow();
    expect(() => objectToMap(new Map())).toThrow();
    expect(() => objectToMap(Symbol())).toThrow();
    expect(() => objectToMap([])).toThrow();
  });

  it("should return a Map from Object", () => {
    expect(objectToMap({foo: "bar", star: 1}))
      .toEqual(new Map([["foo", "bar"],["star", 1]]));
    expect(objectToMap({[43]: "bing", "Ping": { foo: [1,2,{}]}}))
      .toEqual(new Map([["43", "bing"], ["Ping", { "foo": [1,2,{}]}]]));
  });
});
