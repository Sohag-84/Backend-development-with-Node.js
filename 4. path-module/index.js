const path = require("path");

console.log("Directory name: ", path.dirname(__filename));
console.log("File name: ", path.basename(__filename));
console.log("File Extention: ", path.extname(__filename));

const joinPath = path.join("/user", "sohag", "tutorial");
console.log("Join path: ", joinPath);
