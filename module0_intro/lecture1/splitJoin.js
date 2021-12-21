let name = "Sidanth";
let str = `  I am ${name}  `;
console.log(str);

let arrStr = str.split(" ");
console.log("without trim arrStr:  ", arrStr); // ',' no typecast

str = str.trim(); // remove whitespace in start and end of string
arrStr = str.split(" ");
console.log("with trim arrStr: " , arrStr); // '+' typecast everything into a string and prints



console.log("arrStr:  " , arrStr); // '+' typecast everything into a string and prints
let joinedStr = arrStr.join("$");

console.log("joinedStr:  " , joinedStr); // '+' typecast everything into a string and prints

let input = "I'm a little pot";
let inputArr = input.split(" ");
console.log("inputArr:  " , inputArr); 

let arr = JSON.parse(input); // ?? --> GOOGLE IT json.parse()
console.log("inputArr arr :  " , arr); 




// input = "1 2 3\n100 2 3 100 10";
// inputArr = input.split("\n");
// console.log("inputArr[0]:  " , inputArr[0]); 
// console.log("inputArr1[1]:  " , inputArr[1]); 
// console.log("inputArr:  " , inputArr); 

// 
// let arr1 = JSON.parse(inputArr[0]);
// let arr2 = JSON.parse(inputArr[1]);
// console.log("inputArr1:  " , arr1); 
// console.log("inputArr2:  " , arr2); 
