const { anonymize } = require("../lib");

describe("anonymize", () => {

  test("anonymize empty name", () => {
    expect(anonymize("")).toBe("");
  });

  test("anonymize single name", () => {
    expect(anonymize("John")).toBe("J***");
  });

  test("anonymize full name", () => {
    expect(anonymize("John Doe")).toBe("J*** D**");
  });

  test("anonymize middle name", () => {
    expect(anonymize("John Smith Doe")).toBe("J*** S**** D**");
  });

  test("anonymize middle name", () => {
    expect(anonymize("John Smith McDoe")).toBe("J*** S**** M****");
  });

});
