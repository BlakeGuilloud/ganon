const { countNoOfWords } = require("../lib");

describe("countNoOfWords", () => {
  test("countNoOfWords(A) where A is a valid string and returns C which is the count of number of words in the stirng.", () => {
    expect(countNoOfWords("A quick brown fox jumped high over ten little lazy dogs")).toEqual(11);
    expect(countNoOfWords("this is a simple, statement !")).toEqual(5);
  });
  test("countNoOfWords() where no arguments are given", ()=>{
    expect(countNoOfWords()).toEqual(0);
  });
  test("countNoOfWords(A) where A is not a string or undefined", ()=>{
    expect(countNoOfWords(2).toEqual(0));
  });
});
