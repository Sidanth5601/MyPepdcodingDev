// task: using map function return a  output array = ["S.M." , "S.R."" ]

let arr = ["Sumit Malik", "Sidanth Raja", "Arjun K C", "N K Harshadh"];

let result = arr.map( function(value, idx, oarr) {
    let subArrays = value.split(" ");
    let str  = "";
    for(let i = 0; i < subArrays.length; i++) {
        str += subArrays[i].charAt(0) + ".";
    }
    return str;
})

console.log(result);


// short solution forlet resArr = narr.map(function(v, i, oarr){
  let resArr = narr.map(function(v, i, oarr){
    let space = value.split(" ");
    return space[0][0] +"." +space[1][0] +".";
});
console.log(resArr);
