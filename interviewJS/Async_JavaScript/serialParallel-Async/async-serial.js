
console.log("before");

const fs = require('fs');

fs.readFile('f1.txt', cb1);

function cb1(error, data) {
    if(error) console.log(error)
    else {
        console.log("data:" + data);
        fs.readFile('f2.txt', cb2);
        
    }
}

function cb2(error, data) {
    if(error) console.log(error)
    else {
        console.log("data:" + data);
        fs.readFile('f3.txt', cb3);
    }
}

function cb3(error, data) {
    if(error) console.log(error)
    else {
        console.log("data:" + data);
    }
}

console.log("after");