const { matMul } = require("../lib");

describe("matMul", () => {
  it("should correctly multiply square matrices of equal sizes", () => {
    expect(matMul([[2,2],[0,2]], [[3,0],[1,1]])).toEqual([[8,2], [2,2]]);
    expect(matMul([[2]], [[5]])).toEqual([[10]]);
    expect(matMul([[1,0,0], [0,1,0], [0,0,1]], [[1,2,3],[4,5,6],[7,8,9]])).toEqual([[1,2,3],[4,5,6],[7,8,9]]);
  });
  it("should correctly multiply non-square matrices of valid sizes", () => {
    expect(matMul([[1,2,3],[4,5,6]], [[7,8,9,10],[11,12,13,14],[15,16,17,18]])).toEqual([[74, 80, 86, 92], [173, 188, 203, 218]]);
    expect(matMul([[1,2,3,4]], [[5],[6],[7],[8]])).toEqual([[70]]);
    expect(matMul([[7,7],[6,6],[5,5],[4,4]], [[3,9,27,81],[2,4,8,16]])).toEqual([[35, 91, 245, 679], [30, 78, 210, 582], [25, 65, 175, 485], [20, 52, 140, 388]]);
  });
  it("should throw an InvalidDimensions error when the given dimensions are invalid", () => {
    var test1 = function() {
      matMul([[1],[2],[3],[4]], [[5,6,7],[8,9,10]]);
    };
    expect(test1).toThrowError("InvalidDimensions");
    var test2 = function() {
      matMul([[1,2,3], [1,2,3]], [[1,2,3], [1,2,3]]);
    };
    expect(test2).toThrowError("InvalidDimensions");
  });
});
