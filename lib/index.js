const fs = require("fs");
const path = require("path");
const normalizedPath = path.join(__dirname);
const files = fs.readdirSync(normalizedPath);
const modules = files.reduce((modules, file) => {
  const moduleName = path.basename(file, ".js");
  const newModules = {...modules};
  newModules[moduleName] = require(`./${moduleName}`);
  return newModules;
}, {});

module.exports = modules;
