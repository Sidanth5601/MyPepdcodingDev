let fs = require("fs");
console.log("Before");

fs.readFile("f1.txt", cb) ; // no wait for read file move on
function cb(err, content) {
    console.log("content" +  content);
    fs.readFile("f2.txt", cb1); // new part is continued inside the CB itself for "serial exectution"
}
function cb1(err, content) {
    console.log("content" +  content);
    fs.readFile("f3.txt", cb2);
}
function cb2(err, content) {
    console.log("content" +  content);
}
console.log("After");