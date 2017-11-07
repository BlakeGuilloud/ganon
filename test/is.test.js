const { is } = require("../lib");

const isNamesArray = [
  "isAnagram",
  "isArray",
  "isArrayEqual",
  "isBetween",
  "isConsonant",
  "isDivisibleBy",
  "isEmailAddress",
  "isEmpty",
  "isEven",
  "isFunction",
  "isHappyNumber",
  "isHarshad",
  "isHasKey",
  "isHeterogram",
  "isInteger",
  "isJson",
  "isLeapYear",
  "isNegativeZero",
  "isNotNegative",
  "isNull",
  "isNumber",
  "isObject",
  "isOdd",
  "isPalindrome",
  "isPangram",
  "isPositiveZero",
  "isPrime",
  "isPythagoreanTriple",
  "isReachable",
  "isString",
  "isStringUppercase",
  "isSymbol",
  "isVowel",
  "isWebsite"
];

const isFunctionObject = (function(){
  var tmpObj = {};
  for(var i = 0; i < isNamesArray.length; i++){
    tmpObj[isNamesArray[i]] = require("../lib/" + isNamesArray[i]);
  }
  return tmpObj;
}());

describe("is", () => {
  test("Test if every isFunction is correctly linked", () => {
    for(var i = 0; i < isNamesArray.length; i++){
      expect(is(isNamesArray[i].substring(2))).toBe(isFunctionObject[isNamesArray[i]]);
    }
  });

  test("Throw error when arguments have no corresponding function", () => {
    expect(() => is("Real Life")).toThrow("Invalid Argument");
    expect(() => is("Fantasy")).toThrow("Invalid Argument");
  });

  test("Throw error when non-string types are provided to dyad", () => {
    expect(() => is(5)).toThrow("Invalid Type");
    expect(() => is(null)).toThrow("Invalid Type");
    expect(() => is(undefined)).toThrow("Invalid Type");
    expect(() => is({})).toThrow("Invalid Type");
  });
});
