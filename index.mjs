import fs from "fs";

function require(moduleName) {
  console.log(moduleName + " is being required");
  const module = {
    exports: {},
  };
  const resolvedPath = require.resolve(moduleName);
  eval(
    `(function(exports){${fs.readFileSync(
      resolvedPath,
      "utf8"
    )}})(module.exports)`
  );
  return module.exports;
}
require.resolve = (moduleName) => {
  return `./${moduleName}.mjs`;
};
const value = require("helloworld");
console.log(value);
