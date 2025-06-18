const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("Data folder is created");
}

const filePath = path.join(dataFolder, "example.txt");
//sync way of creating the file
fs.writeFileSync(filePath, "Hello from node js");
console.log("File created successfully");

const readContentFromFile = fs.readFileSync(filePath, "utf8");
console.log("File content: ", readContentFromFile);

//to add new line on txt file
fs.appendFileSync(filePath,"\nThis is a new line added to that file")
console.log("New file content added");


