let fs = require("fs");

console.log("before");

// // call back way of doing async tasks
// fs.readFile("f1.txt", function cb(err, data) {
//      if(err) console.log(err);
//     console.log("data" + data);
// })


// promise way of async task
// promise -> once resolved -> u get data
// promise -> rejected -> u get error
let freadPromise = fs.promises.readFile("f11.txt");

// function pass -> for resolved case
freadPromise.then(function cb(data) {
    console.log("data" + data);
})

// function pass -> for rejection case
freadPromise.catch(function cb(err) {
    console.log("error"+ err);
})

console.log("after");
