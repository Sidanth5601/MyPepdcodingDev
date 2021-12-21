function pattern(n) {
  //write your code here 
  for(let i = 0; i < n ; i++) {
        for(let j  = 0; j < n; j++) {
            if(j == i)  process.stdout.write("*\t");
            else process.stdout.write("\t");
        }
        process.stdout.write("\n");
    }
}

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
var input = [];

rl.on('line', function(line){
input.push(JSON.parse(line))
})

rl.on('close',function(){
pattern(input);
});