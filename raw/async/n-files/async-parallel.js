let fs = require("fs");

let files = ["f1.txt", "f2.txt","f3.txt","f4.txt","f5.txt"];


console.log("before");
// first read -> then put cb in waiting Queue
for(let i = 0; i < files.length; i++) {
    fs.readFile(files[i], function cb(err, data) { 
        console.log("data" + data);
    })
}
console.log("after");

// conclusion : for n-files parallel mai for loop works
                // serial mai for loop -> deadlocks
                // solution : recursion function