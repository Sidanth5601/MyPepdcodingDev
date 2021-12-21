let arr = [10, 20, 30, 40, 50];

// my un-optimised solution
for(let i = 0; i < arr.length; i++) {
    for(let j = i; j < arr.length; j++) {
        for(let k = i; k <= j; k++) {
            process.stdout.write(`${arr[k]} `)
            // console.log( arr[k] );
        }
        console.log()
    }
}

// sir optimised solution
for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j <= arr.length; j++) {
        let subarr =  arr.slice(i, j);
        displayArray(subarr);
    }
}
function displayArray(arr){
    console.log(arr + " = " + arr.length);
}