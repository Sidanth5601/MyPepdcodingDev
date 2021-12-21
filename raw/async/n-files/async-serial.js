let fs = require("fs");

let files = ["f1.txt", "f2.txt","f3.txt","f4.txt","f5.txt"];


console.log("before");
// first read -> then put cb in waiting Queue

// deadlock code
// for(let i = 0; i < files.length;) { // help!!! cannot exit becoz i = 0 always
//     fs.readFile(files[i], function cb() { // cb stuck in waiting queue why?
//         console.log("data" + data);
//         i++; // becoz iterator is inside cb which is never called
//     })
// }

// solution: Recursion function
 function serialReader(i) {
     if(i == files.length) { return; }

     fs.readFile(files[i], function cb(err, data) {
         console.log("data" + data);
         serialReader(i + 1); // inside cb, nxt task of reading is done 
     });
 }

serialReader(0);
console.log("after");


// 1. analysis how the recursion code worked 
    // due to use of function which exit once no code is left , unlike infinte for loop
// 2. how files and i variable value is still present when cb is called from waiting-Q and GEC not present
        // due to concept of "closure"