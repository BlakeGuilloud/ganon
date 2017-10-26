const { getMaterialConditional } = require("../lib");

describe("getMaterialConditional", () => {
  it("should return true when antecendent is true & consequent is true", () => {
    expect(getMaterialConditional(true, true)).toEqual(true);
  });

  it("should return false when antecendent is true & consequent is false", () => {
    expect(getMaterialConditional(true, false)).toEqual(false);
  });

  it("should return true when antecendent is false", () => {
    expect(getMaterialConditional(false, false)).toEqual(true);
    expect(getMaterialConditional(false, true)).toEqual(true);
  });
});
