// function defination
function sayHello(name) {
    console.log("hello ", name);
}
// function invokation
sayHello("Sid");


console.log(sayHello);          // haven't called the function yet
console.log(sayHello("Sid")); // sayHello func. is returning undefined 

// if you don't pass the parameter then undefined is passed
sayHello();


funtion spidyVerse(name) {
    return `returned hello $(name)`
}
spidyVerse("sid");