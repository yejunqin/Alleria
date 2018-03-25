const { execSync } = require("child_process");

execSync("rm -rf ./dist/js");
execSync("rm -rf ./dist/*.html");
