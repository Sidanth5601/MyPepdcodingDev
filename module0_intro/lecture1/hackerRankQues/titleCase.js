function processData(input) {
    input = input.trim();
    
    let arrStr = input.split(" ");
    
    for(let i = 0; i < arrStr.length; i++) {
        
        let temp = arrStr[i].charAt(0).toUpperCase(); // I
        let ss = arrStr[i].slice(1, arrStr[i].length ); // 'm
        // let ss = arrStr[i].slice(1); // same as above
        ss = temp + ss;
        arrStr[i] = ss;
        
        arrStr[i][0] = temp;
    }
    input = arrStr.join(" ")
    console.log(input)
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