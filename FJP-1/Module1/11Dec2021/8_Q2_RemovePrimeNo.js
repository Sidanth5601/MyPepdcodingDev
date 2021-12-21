// TRICK is to remove from back of the array for not missing a element


let arr = [20, 30, 19, 7, 4];

function isPrimeArray(n) {
    if(n <= 1 ) return false; // corner case
    if(n == 2 || n == 3) return true; // remaining case

    if(n % 2 == 0 || n % 3 == 0) return false;
    
    for (let i = 5; i * i <= n ; i += 6) {
       if(n % i == 0 || n % (i+2) == 0) return false;
    }
    return true; 
   
}

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}

for (let i = arr.length - 1; i >= 0; i--) {
    if(isPrimeArray(arr[i]) ) {
        arr.splice(i, 1); // for removing one element at specfic index
    }
}
displayArray(arr);
