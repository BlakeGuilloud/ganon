const { deleteProp } = require("../lib");



describe("deleteProp", () => {
  const obj = {
    name: "Jimmy",
    age: 10,
    sayHello: function(person){
      return `hello ${person}`;
    }
  };
  const newObj = deleteProp(obj, "name");

  it("should return a new object", () => {
    expect(obj.name).toBe("Jimmy");
  });
  it("should remove property", () => {
    expect(newObj.name).toBe(undefined);
  });
});
