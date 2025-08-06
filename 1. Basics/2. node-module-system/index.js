const firstModule = require("./first-module");

console.log(firstModule.add(12,5));

try {
    console.log("Trying to divive by 0");
    const result = firstModule.divide(3,0);
    console.log(result);
    
} catch (error) {
    console.log("Error occured",error.message);
    
}
