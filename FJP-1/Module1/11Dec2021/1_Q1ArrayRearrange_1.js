// TASK: rearrange the array, add all even elements to front and odd elements at end 
let arr = [20, 30, 80, 100, 40, 7, 17];

console.log(rearrange(arr) );

function rearrange(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 != 0) { // odd
            newArr.push(arr[i]);
        }
        else { // even
            newArr.unshift(arr[i]);
        }
    }
    return newArr;
}