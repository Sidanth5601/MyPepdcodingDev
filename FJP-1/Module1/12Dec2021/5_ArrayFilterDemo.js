
// odd filter Demo 
let arr = [2, 5, 9, 8, 15, 11, 6];
let oddList = arr.filter( function(v, i, oarr) {
    if(v % 2 == 1) { return true; } // if odd -> true
    else { return false; }
})

displayArray(oddList);

function displayArray(arr) {
    console.log(arr + " = " + arr.length);
}