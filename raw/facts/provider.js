let fs = require("fs");
// request
let axios = require("axios")
// file with name f1 will be written 
let pPromise = fs.promises.readFile("f1.txt");
pPromise.then(function(data) {
    console.log("Result of fileReadPromise" + data)
})

let respPromise = axios.get("https://jsonplaceholder.typicode.com/users");
respPromise.then(function (response) {
    console.log("Result of axios" + response.data);

})