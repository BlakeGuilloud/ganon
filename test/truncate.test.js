const { truncate } = require("../lib");

describe("truncate(s,n)", () => {
  it("returns truncated string", () => {
    expect(truncate("hello", 3)).toBe("hell");
    expect(truncate("pink panther", 3)).toBe("pink");
  });
  it("returns an empty array when the inputs are invalid", () => {
    expect(truncate("", 2)).toBe("");
    expect(truncate(324, 2)).toBe("");
    expect(truncate("negative", -2)).toBe("");
  });
});
