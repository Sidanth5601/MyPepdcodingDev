// sort and reverse
// must read sort : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
let sarr = ["hello", "bello", "bye", "there", "pep", "nados"];
let arr = [20, 54, 12, 33, 98, 76, 100, 11, 291, 34];

// 1) sort() Return value
//      The sorted array. Note that the array is sorted in place, and no copy is made
// 2) reverse() Return value:  The reversed array.

sarr.sort();
console.log( sarr )

sarr.reverse();
console.log( sarr )

arr.sort(); // does an alphabetical order **
console.log( "alphabatically order sorting", arr )


// solution is to use sort() compare function
arr.sort(function(a,b) 
{ return a - b })
console.log( "using sort compare functon", arr )

arr.reverse();
console.log( arr )
