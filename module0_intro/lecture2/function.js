// dryRun it 


function fn() {
    fn1();
    console.log("I am a function and my name fn");
    return "hello"; 
}


// function defination
function fn1() {
    console.log("I am fn1");
}

// console.log("function fn1 :", fn1); // its not a call becoz () is not used
// let rVal = fn1(); // function call/invocation
// // rVal = undefined if function not returning anything
// console.log("rVal from fn1: ", rVal);


let tempArr = [1, 2, 3, 15, 7];
let temp1Arr = tempArr;
let arr1 = [
    1, 
    "s",
    tempArr,
    fn1
];

console.log("access the last element: ", arr1[arr1.length - 1]);
console.log("call the last element:", arr1[arr1.length - 1]());
console.log("2dArray", arr1[arr1.length - 2]);