let fs = require('fs');
console.log("before");
let content = fs.readFileSync("f1.txt"); // waits here to complete readFile fully
console.log("content" + content);
content = fs.readFileSync("f2.txt");
console.log("content" + content);
content = fs.readFileSync("f3.txt");
console.log("content" + content);
console.log("After")