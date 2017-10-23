const { xorEncryption } = require("../lib");

const RESULTS = [
  {
    data: "my text is very good",
    key: "my key",
    result: [0, 0, 0, 31, 0, 1, 25, 89, 73, 24, 69, 15, 8, 11, 89, 75, 2, 22, 2, 29],
    iterations: 1,
    outputAsString: false,
  }, {
    data: "Hey am i gonna get decrypted?",
    key: "Yup I think so",
    result: "Hey am i gonna get decrypted?",
    iterations: 2,
    outputAsString: true,
  }, {
    data: [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100],
    key: [42, 36, 12, 21, 3, 18, 2, 11, 2],
    result: "hello world",
    iterations: 2,
    outputAsString: true,
  }, {
    data: "",
    key: "Doesn't matter how long my keys aaaaaare",
    result: [],
    iterations: 1,
    outputAsString: false,
  }, {
    data: "hello world this is me",
    key: "",
    result: "hello world this is me",
    iterations: 1,
    outputAsString: true,
  }, {
    data: "Doesn't matter how many times I repeat the algorithhhhhm",
    key: "I'm a very secure key",
    result: "Doesn't matter how many times I repeat the algorithhhhhm",
    iterations: 10,
    outputAsString: true,
  }, {
    data: JSON.stringify({ i: { can: { encrypt: { serialized: "data" }}}}),
    key: "I'm another very secure key",
    result: [50, 5, 4, 2, 91, 21, 77, 23, 9, 11, 80, 26, 13, 71, 23, 23, 67, 1, 28, 19, 1, 80, 95, 91, 73, 22, 28, 59, 78, 12, 76, 8, 20, 10, 16, 74, 95, 80, 68, 23, 17, 19, 91, 93, 14, 24, 30],
    iterations: 1,
    outputAsString: false,
  }, {
    data: [50, 5, 4, 2, 91, 21, 77, 23, 9, 11, 80, 26, 13, 71, 23, 23, 67, 1, 28, 19, 1, 80, 95, 91, 73, 22, 28, 59, 78, 12, 76, 8, 20, 10, 16, 74, 95, 80, 68, 23, 17, 19, 91, 93, 14, 24, 30],
    key: "I'm another very secure key",
    result: "{\"i\":{\"can\":{\"encrypt\":{\"serialized\":\"data\"}}}}",
    iterations: 3,
    outputAsString: true,
  }, {
    data: [42, 13, 37, 25, 6, 10],
    key: [1, 2, 3],
    result: [43, 15, 38, 24, 4, 9],
    iterations: 1,
    outputAsString: false,
  },
];

describe("xorEncryption", () => {
  RESULTS.forEach(entry => {
    test(`xoring '${entry.data}' with key '${entry.key}' should yield '${entry.result}' (${entry.iterations} iterations)`, () => {
      let res = entry.data;
      for (let i = 0; i < entry.iterations; i++) {
        res = xorEncryption(res, entry.key, entry.outputAsString);
      }
      expect(res).toEqual(entry.result);
    });
  });

});
