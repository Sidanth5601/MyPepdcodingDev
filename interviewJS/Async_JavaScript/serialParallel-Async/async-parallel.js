const fs = require('fs');


console.log("before");

fs.readFile('f1.txt', cb1);
fs.readFile('f2.txt', cb2);
fs.readFile('f3.txt', cb3);

function cb1(error, data) {
    if(error) console.log(error)
    else {
        console.log("data:" + data);
    }
}
function cb2(error, data) {
    if(error) console.log(error)
    else {
        console.log("data:" + data);
    }
}
function cb3(error, data) {
    if(error) console.log(error)
    else {
        console.log("data:" + data);
    }
}

console.log("after");