// Unshift and shift same as push/pop but works in front

// Ushift adds 1 value to front of array 
// shift remove 1 value front front

let arr = [20, 30, 80, 100, 40];
let  rv  = arr.unshift(100); // return length of new array
console.log(rv)
displayArray(arr);

rv = arr.shift(); // return removed value
displayArray(arr);
console.log(rv)

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}