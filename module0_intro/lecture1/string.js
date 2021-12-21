// strings 
let a = 10;

let str = "Hello I am a \nstring " + a; // + means all thing under "" are  converted into a single string
// console.log(str);
str = 'Hello I am also a \nstring ' + a;
// console.log(str);
// template string it is enclosed inside backtick
let str1 = `Hello_I_am a template string ${a}`;
console.log("Actual str:", str1);    // , means nothing under "" is typecasted to a string (print as it is)

// Access character's of a string using -> { [index] or charAt() }

let charAt3 = str1.charAt(3).toUpperCase(); // L
//  charAt3 = str1[3].toUpperCase(); // L
console.log("char At 3 : ", charAt3);

// substr() or slice() -> starting index ,ending-1 [)
let slicedStr = str1.slice(4, 10); // 'o_I_am' lastindex not included (10th)
//  slicedStr = str1.substr(4, 10);
 console.log("sliced :",slicedStr);
// toLowerCase, toUpperCase

// string.split()  -> array of string on the  
// basis of the delimeter-> array of string
let arrayStr = str.split("a");
// console.log("Array of String", ArrayStr);
// get length
let length = str.length;
console.log(length);
let str3 = "   Hello How Are You  ";

//  trim : remove whitespace and underscore from start and end of string 
console.log("without trim :",  str3);
let trimmedStr = str3.trim(); 
console.log("with trim() :" , trimmedStr);


let arrString = trimmedStr.split(" ");
console.log("arr string with , used inside console", arrString);
console.log("arr string with + used inside console" + arrString);
// convert array of string into 
// single  string on the basis of delimieter 
let ans = arrString.join("+");
console.log(ans);
console.log("ans.includes(llo)" , ans.includes("llo"));
