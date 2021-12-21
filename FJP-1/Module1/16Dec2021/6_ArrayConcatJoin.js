// task: without loop you have to do it 
 
let str = "My name is Summet Malik. I am Software Developer. I believe in learning by doing. I need courage and Patience."
// output
"Malik Sumeet is name My. Developer Software am I. doing by learning in believe I. Patience and courage need I."


let res1 = str.split(".");
console.log(res1);

let res2 = res1.filter(s => s.length != 0) // remove empty array[]
console.log(res2);

let res3 = res2.map(s => s.trim()) // remove starting xtra space
console.log(res3);

let res4 = res3.map(s => s.split(" ")); // split a 1d string into array
console.log(res4);

res4.map(a => a.reverse()); // more relevant using forEach
console.log(res4);

let res5 = res4.map(a => a.join(" "));
console.log(res5)

let res6 = res5.map(s => s + ".");
console.log(res6)

let res7 = res6.reduce(function(pv, cv){
    return pv + " " + cv;
})
console.log(res7)


// let res = ""

// let subStr = str.split(".");
// // console.log(typeof subStr);
// // console.log(typeof subStr[0]);

// res = arr.reduce(function(pv, cv, ci, oarr) {
//      console.log(typeof pv, " $ ", typeof cv);
//     return pv.reverse() + "." + cv.reverse() + ".";
// }, "")

// console.log(res);

// // Error_in_Terminal :  pv.reverse() and cv.reverse() is not a function  
// // My_Question: i check typeof pv, cv is also string still reverse not working on it

// // let subStr = str.split(".");
// // let res = subStr.reduce(function(pv, cv, ci, oarr) {
// //      console.log(typeof pv, " $ ", typeof cv); 
// //     return pv.reverse() + "." + cv.reverse() + ".";
// // }, "")