function processData(input) {
    
    let inputArr = input.split("\n");  // multiply strings
    let data = inputArr[inputArr.length -1]; // last string
     // console.log(data); 
    inputArr.pop(); // removed last data value

    let arr = inputArr;
    // console.log(arr);
    
    let l = 0, h = arr.length - 1, mid = 0;
    let flag = 0; // 0 - match not found!!  1 - match found

    let lastIndex = 0, firstIndex = 0;

    // Last Index
    while ( l <= h ) {
        mid = Math.floor( (l + h) / 2 );
        if ( data > arr[mid] ) {
            l = mid + 1;
        }
        else if ( data < arr[mid] ) {
            h = mid - 1;
        }
        else { // found
            flag = 1;
            lastIndex = mid;
            l = mid + 1; // find right most match
        } 
    }
    
    // First Index
    l = 0;
    h = arr.length -1;
    while ( l <= h ) {
        mid = Math.floor( (l + h) / 2 );
        if ( data > arr[mid] ) {
            l = mid + 1;
        }
        else if ( data < arr[mid] ) {
            h = mid - 1;
        }
        else {
            firstIndex = mid;
            h =  mid - 1; // find right most match
        } 
    }
    
    if( !flag ) console.log("-1\n-1");
    else 
        console.log(firstIndex-1)
    console.log(lastIndex-1);
    
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});