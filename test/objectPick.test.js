const { objectPick } = require("../lib");
const testObj = {
  name: "Max",
  age: 12,
  family: {
    father: "Fred",
    mother: "Zelda",
    brothers: [
      "Sam",
      "Eddy"
    ],
    extendedFamily: {
      aunts: [
        "Mary",
        "Samantha"
      ],
      cousins: [
        "Ben",
        "Emily"
      ]
    }
  }
};

describe("objectPick", () => {
  it("should not affect the original object", () => {
    const obj = {
      name: "Mark",
      age: "33"
    };

    let pickedObj = objectPick(obj, "name");
    expect(obj).toEqual(obj);
  });

  it("should throw when obj param is invalid/undefined", () => {
    expect(() => objectPick()).toThrow();
    expect(() => objectPick([])).toThrow();
  });

  it("should return original obj when 2nd param is invalid/undefined", () => {
    const obj = {
      name: "Mark",
      age: "33"
    };

    expect(objectPick(obj)).toEqual(obj);
    expect(objectPick(obj, {})).toEqual(obj);
    expect(objectPick(obj, 2)).toEqual(obj);
    expect(objectPick(obj, obj)).toEqual(obj);
    expect(objectPick(obj, true)).toEqual(obj);
    expect(objectPick(obj, 0)).toEqual(obj);
  });

  it("should return picked obj", () => {
    let pickedObj = {
      name: "Max",
      age: 12
    };

    expect(objectPick(testObj, "name")).toEqual({name: "Max"});
    expect(objectPick(testObj, ["name", "age"])).toEqual(pickedObj);
  });

  it("should return picked obj with new props if passed", () => {
    expect(objectPick({f:2}, ["f", "", "bing"])).toEqual({f:2,"":undefined, "bing":undefined});
  });

  it("should return picked obj with nested props param", () => {
    let pickedObj = {
      name: "Max",
      age: 12,
      family: {
        foo: undefined,
        father: "Fred",
        extendedFamily: {
          cousins: [
            "Ben",
            "Emily"
          ]
        }
      }
    };

    expect(objectPick(testObj, ["name", ["family", ["father", "foo", ["extendedFamily", ["cousins"]]]], "age"])).toEqual(pickedObj);
  });
});
