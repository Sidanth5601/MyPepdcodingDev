// no main 
// left to right and top to bottom


console.log("Hello Js World @");

let a; // default - 'undefined'

console.log(a);

a = 10;
// console.log(a);

console.log(5/2); // 2.5 // pure math -> No int/float logic of C/C++/Java
console.log(Math.floor(5/2)); // 2 // round-off 


// string -> character / string
a = "whoola I am String now";
// console.log(a);

// boolean -> true/false
a = true;
// console.log(a);

a = null;
// console.log(a);

// Summary -> variables -> declare, by default -> undefined
// primitive types in JS : undefined, number, string, boolean, null

for(let i = 0; i < 5; i++) {
   console.log("Number  is "   + i);
//  console.log(`Num is : ${i}`);
}

let input = 10;

function processData(input) {
    let isPrime = true;
    for(let div = 2; div*div <= input; div++) {
        if(input % div == 0) {
            isPrime = false;
            break;
        }
    }
    if(isPrime) console.log("Prime");
    else 
        console.log("Not Prime");
} 


 for(let i = 1 ; i <= input; i++) {
     if(i % 3 == 0 && i % 5 == 0) {
         console.log("FizzBuzz");
     }
     else if(i % 3 == 0) {
         console.log("Fizz");
     }
     else if(i % 5 == 0) {
         console.log("Buzz");
     }
     else {
         console.log(i); // cursor move down to nxt line
     }

 }
    function processData(n) {
    //Enter your code here'
    var a = 0;
    var b = 1;
    var c = 0;
    for(let i = 0; i < n; i++) {
        process.stdout.write(a + "/t"); // cursor remain in at end 
        c = a + b;
        b = a;
    }


    function processData(n) {
    let mid = Math.floor(n / 2);
    let st = mid + 1;
    let sp = 1;

    for(let i = 0; i < n ; i++) {
        for(let j  = 0; j < st; j++) {
            process.stdout.write("*");
        }
         for(let j  = 0; j < sp; j++) {
            process.stdout.write("\t");
        }
         for(let j  = 0; j < st; j++) {
            process.stdout.write("*");
        }
        
        if(i < mid) {
             st--;
            sp += 2;
        }
        else {
            st++;
            sp -= 2;
        }
        
        process.stdout.write("\n");
    }
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

} 
 
    

