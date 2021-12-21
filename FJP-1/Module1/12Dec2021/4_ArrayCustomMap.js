// Map is itself a fn
// Map takes as input a callback fn 
// The callback fn takes 3 parameter (v, i, oarr)
// map will call the callback multiple times (once for each value)
// for each run of callback, map will pass v, i and original array to callback
// callback will process the value and index and return a single value
// Single value returned by each run of callback will be collected in a new array by map
// Map returns that new array
// length of returned array is equal to original array

Array.prototype.mymap = function(callback) {

    let res = [];
    for(let i = 0; i < this.length; i++) {
        let val = this[i];
        let rv = callback(val, i, this);
        res.push(rv);
    }

    return res; // finally return a array of same length as original array

}

// demo
let arr2 = [2, 5, 9, 8, 15, 11, 6];

let sqarr = arr2.mymap(function(v, i, oarr){
    return v * v;
});
console.log(sqarr);

let narr = [
    "Sumeet Malik",
    "Amit Malik",
    "Inderjit Malik",
    "Daya Malik",
    "Kunal Malik",
    "Aryan Malik"
];
// Q1 using custom-Map
// Use the map function to produce the below output
//["S.M.", "A.M.", "I.M.", "D.M.", "K.M.", "A.M."];

let result1 = narr.mymap( function(value, idx, oarr) {
    let subArrays = value.split(" ");
    let str  = "";
    for(let i = 0; i < subArrays.length; i++) {
        str += subArrays[i].charAt(0) + ".";
    }
    return str;
})
console.log(result1);

// Q3 using custom-Map
let oarr = [
    {
        gender: 'M',
        age: 24
    },
    {
        gender: 'F',
        age: 34
    },
    {
        gender: 'F',
        age: 28
    },
    {
        gender: 'M',
        age: 74
    },
    {
        gender: 'F',
        age: 31
    },
    {
        gender: 'M',
        age: 47
    },
    {
        gender: 'F',
        age: 26
    },
    {
        gender: 'M',
        age: 47
    },
    {
        gender: 'F',
        age: 47
    },
    {
        gender: 'F',
        age: 19
    },
    {
        gender: 'M',
        age: 20
    }
];

// Use the map function to produce the below output
// return an array with true and false for females between 20 and 30
// let us say xyz corp wants to hire females between age >= 20 and <=30

let result2 = oarr.mymap(function(value, idx, oarr){
//    console.log(value.gender) ;
     if( (value.gender == 'F' || value.gender == 'f') && (value.age >= 20 && value.age <= 30))  { return true; }   
     else { return false; }
})

console.log(result2);


// using arrow function with curly & return statemnt 
let sl3 = oarr.mymap((v, i, oarr) => { 
    return v.gender == 'F' && v.age >= 20 && v.age <= 30 ;
});
console.log(sl3);

// using arrow function without curly & return statemnt
let sl2 = oarr.mymap( (v, i, oarr) => v.gender == 'F' && v.age >= 20 && v.age <= 30 ); // automatically returns
console.log(sl2);