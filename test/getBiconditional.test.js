const { getBiconditional } = require("../lib");

describe("getBiconditional", () => {
  it("should return true when antecendent & consequent are true", () => {
    expect(getBiconditional(true, true)).toEqual(true);
    expect(getBiconditional(1, 7)).toEqual(true);
    expect(getBiconditional("-1", "7")).toEqual(true);
    expect(getBiconditional("foo", "0")).toEqual(true);
  });

  it("should return true when antecendent & consequent are false", () => {
    expect(getBiconditional(false, false)).toEqual(true);
    expect(getBiconditional(false)).toEqual(true);
    expect(getBiconditional(0, 0)).toEqual(true);
    expect(getBiconditional(0)).toEqual(true);
    expect(getBiconditional(null)).toEqual(true);
    expect(getBiconditional()).toEqual(true);
    expect(getBiconditional(false, null)).toEqual(true);
  });

  it("should return false when antecendent & consequent are not the same truth value", () => {
    expect(getBiconditional(true, false)).toEqual(false);
    expect(getBiconditional(-7, false)).toEqual(false);
    expect(getBiconditional("hhh")).toEqual(false);
    expect(getBiconditional(true)).toEqual(false);
    expect(getBiconditional({})).toEqual(false);
  });
});
