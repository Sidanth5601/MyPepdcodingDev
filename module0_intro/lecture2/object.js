// represent anything in the cosmos

// empty obj create
let obj = {};
// key : value pairs
// key -> string , number
// value -> anything 1, s , null, true. undefined, array, object

// member variable : properties in js
// member function : methods in js


let cap = {
    name: "Steve",
    lastName: "Rogers",
    friends: ["Peter", "Bruce", "Tony"],
    "is Avenger" : false,
    sayHi : function() {
        console.log("cap say's Hi");
    },
    address : {
        state : "NY",
        city : "NY city",
        //"gully no" : 666
    }
};


for( let key in cap) { // key : name, lastname, friends ke uper chalega
    console.log("(key)",key ,":", cap[key]); // key = name , cap[key] = steve
}

// add new key 
cap.movies = ["First Avenger" , "Civil War", "Winter Soldier"];

//update 
cap.age = 45;
cap.address.gully = 777; // creating new key and updating
console.log(cap);

// delete 
delete cap.age;
console.log("---------------------------------");
console.log(cap);