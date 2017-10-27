const { arrayHead } = require("../lib");

describe("arrayHead", () => {
  it("should return the 1st item in an Array", () => {
    expect(arrayHead([2,3,4])).toEqual(2);
    expect(arrayHead(["2,3,4", "", 100, 44])).toEqual("2,3,4");
  });

  it("should return the 1st item in a String", () => {
    expect(arrayHead("345")).toEqual("3");
    expect(arrayHead("Foo")).toEqual("F");
  });

  it("should return undefined if param is not an Array or String", () => {
    expect(arrayHead({})).toEqual(undefined);
    expect(arrayHead(1234)).toEqual(undefined);
  });
});
