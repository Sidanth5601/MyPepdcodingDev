// hoisting concept
console.log("Starting point");

iamReal();
// 1
function iamReal() {
    console.log("I am Real");
}
// 2
function iamReal() {
    console.log("No, I am Real One");
}
iamReal();