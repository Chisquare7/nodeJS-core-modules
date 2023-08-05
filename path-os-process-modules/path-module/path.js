const path = require("path");


// 1. Print out the current working directory

const currentWorkingDir = path.resolve('/Documents/NodeJS Tasks/path-os-process-modules/path-module/package.json');
console.log({ currentWorkingDir });


// 2. Print out the separator of a given file path

const pathSeparator = path.sep;
console.log({ pathSeparator });


// 3. Print out the extension name of a file path

const fileExtensionName = path.extname('/Documents/NodeJS Tasks/path-os-process-modules/path-module/package.json')
console.log({ fileExtensionName });