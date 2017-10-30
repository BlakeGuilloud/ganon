const { isWebsite } = require("../lib");

describe("isWebsite", () => {
  test("Is website (https://google.com) ?", () => {
    expect(isWebsite("https://google.com")).toBe(true);
    expect(isWebsite("HTTPS://GOOGLE.COM")).toBe(true);
  });

  test("Is website (www.github.com) ?", () => {
    expect(isWebsite("www.github.com")).toBe(true);
  });

  test("Is invalid website (www.googlecom) ?", () => {
    expect(isWebsite("www.googlecom")).toBe(false);
  });

  test("Is invalid website (htts://google.com) ?", () => {
    expect(isWebsite("htts://google.com")).toBe(false);
  });

  test("Is invalid website (https:/www.google.com) ?", () => {
    expect(isWebsite("https:/www.google.com")).toBe(false);
  });

});
