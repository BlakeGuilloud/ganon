const { addProp } = require("../lib");

describe("addProp", () => {

  it("should not affect original object", () => {
    const obj = {
      name: "Mark",
      age: "33"
    };

    // Ignoring return value since only evaluating
    // that original target is not affected.
    addProp(obj, "address", "Main Street 1");
    expect(obj.address).toBe(undefined);
  });

  it("should add the new key to object", () => {
    const obj = {
      name: "Mark",
      age: "33"
    };

    const someProp = "someProp";
    const actual = addProp(obj, someProp, 12345);
    expect(
      Object.keys(actual).includes(someProp)
    ).toBe(true);
  });

  it("should add the new value to the key", () => {
    const obj = {
      name: "Mark",
      age: "33"
    };

    const val = 123;
    const actual = addProp(obj, "someProp", val);
    expect(actual.someProp).toBe(val);
  });
});
