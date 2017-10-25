// Write a function that determines cube root of a given number

function cubeRoot(param){
  if (typeof param != "number")
    throw new Error("Invalid Type");
  return Math.cbrt(param);
}

module.exports = cubeRoot;
