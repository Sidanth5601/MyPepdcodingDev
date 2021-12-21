// importing other file content { similar to headerfiles}
// require ---> path of the file from 
//              where you want to input fxns or variables

let libExportObj = require("./lib");
console.log("I am client file and importing lib.js content ");
console.log("Importing lib.js content using key varName " , libExportObj.varName);
console.log("Importing lib.js content using key fxn ", libExportObj.fxn());
