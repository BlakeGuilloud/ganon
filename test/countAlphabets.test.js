const { countAlphabets } = require("../lib");

describe("countAlphabets", () => {
  test("countAlphabets should return 'a:3'", () => {
    expect(countAlphabets("aaa")).toBe("a:3");
  });

  test("countAlphabets should return 'a:1,p:2,e:1'", () => {
    expect(countAlphabets("apple")).toBe("a:1,p:2,e:1");
  });

  test("countAlphabets of 'doodad' should return 'd:3,o:2,a:1'", () => {
    expect(countAlphabets("doodad")).toBe("d:3,o:2,a:1");
  });

  test("countAlphabets of 'apple pie' should return 'a:1,p:3,l:1,e:2,i:1'", () => {
    expect(countAlphabets("apple pie")).toBe("a:1,p:3,l:1,e:2,i:1");
  });
});
