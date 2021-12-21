let arr = [1, 3, 5, 7, 9];

// push/pop -> add/remove frome last
// unshift / shift ->  add/remove frome first

let slicedArr = arr.slice(1, 3); // no direct change's to original arr
console.log(slicedArr);

// delete range of elemeents
arr.splice(2, 2); // [startIdx. no of element to delete, replacers(optional)]
console.log(arr); // direct arr mai change's hothe h

let idx = arr.indexOf(3);
console.log("arr.indexOf(3): ", idx);

let arrContains = arr.includes(11); // includes() works with array and string both
console.log("contains(11)" , arrContains );

