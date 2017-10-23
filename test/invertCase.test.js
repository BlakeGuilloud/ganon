import { invertCase } from "../lib";

describe("invertCase", () => {
  test("does nothing for empty string", () => {
    expect(invertCase("")).toEqual("");
  });

  test("sets all lower case to caps", () => {
    expect(invertCase("hello world")).toEqual("HELLO WORLD");
  });

  test("sets all caps to lower case", () => {
    expect(invertCase("HELLO WORLD")).toEqual("hello world");
  });

  test("handles mixed case", () => {
    expect(invertCase("Hello World")).toEqual("hELLO wORLD");
  });
});
