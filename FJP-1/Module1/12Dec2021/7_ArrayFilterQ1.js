let arr = [
 {name: 'foo',age: 14, gender : 'F'},
 {name: 'foo2',age: 14, gender : 'M'},
 {name: 'foo3',age: 67, gender : 'F'},
 {name: 'foo4',age: 12, gender : 'M'},
 {name: 'foo5',age: 28, gender : 'F'},
 {name: 'foo6',age: 33, gender : 'M'},
 {name: 'foo7',age: 47, gender : 'F'},
 {name: 'foo8',age: 59, gender : 'M'},
]

// age of all the ladies [14, 67, 28, 47]
// Hint: a.filter(sdfasdf).map(asdf)

let femaleAges = arr.filter(function(v, i, oarr) {
    if(v.gender == 'F') { return true; }
    else { return false; }
}).map( (v, i, oarr) => { return v.age; } )

console.log(femaleAges);

// using arrow function
let result = arr.filter((v) => v.gender == 'F').map( (v) =>  v.age );
console.log(result);

