/*
let arr = [
1,
true, 
"string",
null,
[1, 2, 3, 4, 5],
function fn() {
    console.log("hello i am a function inside an array");
    return "rval from a fn()";
}
];

// get elements of array

console.log( "null at index 3: ", arr[3] );
console.log("extract 3 from 2dArray: ", arr[arr.length - 2][2]);

console.log("function fn accessed, present inside arr[5]  :" , arr[arr.length - 1]);
let rArrVal = arr[arr.length - 1]();
console.log("rArrVal: ", rArrVal);

*/

// function defination
function fn1() {
    console.log("I am a function and my name fn1");
    return "returned from fn1 i.e 10"; 
}

// console.log("function fn1 :", fn1); // its not a call becoz () is not used
// let rVal = fn1(); // function call/invocation
// // rVal = undefined if function not returning anything
// console.log("rVal from fn1: ", rVal);


let tempArr = [1, 2, 3, 15, 7];
let arr1 = [
    1, 
    "s",
    tempArr,
    fn1
];

console.log("access the last element: ", arr1[arr1.length - 1]);
console.log("call the last element:", arr1[arr1.length - 1]());
console.log("2dArray", arr1[arr1.length - 2]);
