const { hex2string } = require("../lib");


describe("flow", () => {
  it("should be a function", () => {
    expect(hex2string()).toBeInstanceOf(Function);
    expect(hex2string("001100")).toBeInstanceOf(Function);
  });

  it("when no string is provided, or string is empty,"
     + " returns empty string", () => {
    expect(hex2string("")).toBe("");
    expect(hex2string()).toBe("");
  });

  it("should convert from hexadecimal to ascii", () => {
    expect(hex2string("68656c6c6f20776f726c64")).toBe("hello world");
    expect(hex2string("677265617420736b656c65746f6e2066756e6374696f6e")
    ).toBe("great skeleton function");
  });
});
