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
    expect(objectPick(obj, {"name": "Gray"})).toEqual(obj);
  });

  it("should return a \"picked\" object, excluding invalid params (not Strings, not String[]'s, empty []'s, etc.)", () => {
    const obj = {
      name: "Mark",
      age: "33"
    };

    const pickedObj = {
      name: "Mark",
    };

    expect(objectPick(obj, ["name", {}])).toEqual(pickedObj);
    expect(objectPick(obj, [{}, "name"])).toEqual(pickedObj);
    expect(objectPick(obj, [[], 5, {}, "name"])).toEqual(pickedObj);
    expect(objectPick(obj, [[], 5, {}, "name"])).toEqual(pickedObj);
  });


  it("should return picked obj", () => {
    let pickedObj = {
      name: "Max",
      age: 12
    };

    expect(objectPick(testObj, "name")).toEqual({name: "Max"});
    expect(objectPick(testObj, ["name", "age"])).toEqual(pickedObj);
    expect(objectPick({
      class: ["elite", "bourgeois", "proletariat"],
      disc: {
        d: 50,
        i: 25,
        s: 85,
        c: 75
      },
      trash: null,
    }, ["class", "trash", ["disc", ["d", "c"]]])).toEqual({
      class: ["elite", "bourgeois", "proletariat"],
      disc: {
        d: 50,
        c: 75
      },
      trash: null
    });
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
