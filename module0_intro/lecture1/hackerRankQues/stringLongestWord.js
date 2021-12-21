function processData(input) {
    input = input.trim();
    let arrStr = input.split(" ");
   
    let maxLengthStr  = arrStr[0].length;
    
    for(let i = 0; i < arrStr.length ; i++) {
        maxLengthStr = maxLengthStr.length >= arrStr[i].length ?  maxLengthStr : arrStr[i];
    }
    // process.stdout.write(maxCount);
    console.log(maxLengthStr);
} 
process.argv.slice("The quick brown fox jumped over the lazy dog");
processData("The quick brown fox jumped over the lazy dog");

// title case  question
function processData(input) {
    input = input.trim();
    let arrStr = input.split(" ");
    for(let i = 0; i < arrStr.length; i++) {
        let temp = arrStr[i][0].toUpperCase(); // I
        let ss = temp + arrStr[0]
        arrStr[i][0] = temp;
    }
    input = arrStr.join(" ")
    console.log(input)
} 