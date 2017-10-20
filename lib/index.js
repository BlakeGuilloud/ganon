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

<<<<<<< HEAD
module.exports = modules;
=======
module.exports = modules;
>>>>>>> 548d0edeab951c692768834eb029bb7164009c7c
