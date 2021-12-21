let fs = require("fs");

function myPromisiedFsReader(filePath) {
    return new Promise(function (resolve, reject) {
        console.log("8");
        fs.readFile(filePath, function cb(err, data) {
            if(err)  reject(err);
            else  resolve(data);
        })
        console.log("9");
    })
}
 
console.log("before");
let fileReadPromise = myPromisiedFsReader("./f1.txt");
// state -> pending (initial) , value -> undefined (initial)
console.log("24", fileReadPromise);

// // 1sec -> async (1sec)
// setTimeout(function () {
//     console.log("11", fileReadPromise);
// }, 1000);

// ##fact3: alternative of setTImeout for waiting for resolve
function scb(data) {
    console.log("hello", data)
}
function fcb(err) {
    console.log("hello", err);
}
console.log("33");
fileReadPromise.then(scb)
fileReadPromise.catch(fcb)
console.log("35");
// then() & catch() --> are synchronous
// but scb() & fcb() --> are always run async


console.log("after");

