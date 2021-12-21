let fs = require("fs");


// fs.promises.readFile --> into our own --> polyfill
// own implemented Promise
function myPromisiedFsReader(filePath) {
    // using this existing function
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, function cb(err, data) {
            if(err) {
                reject(err);
            }
            else {
                resolve(data);
            }

        })
    })
}


// consumer Model based Promise --> promises.js
console.log("before");
let freadPromise = myPromisiedFsReader("f1.txt");
console.log("promise", freadPromise);

// function pass -> for resolved case
freadPromise.then(function cb(data) {
    console.log("data " + data);
})

// function pass -> for rejection case
freadPromise.catch(function cb(err) {
    console.log("error"+ err);
})
console.log("after");




