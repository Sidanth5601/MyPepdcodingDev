/**
 * Inner function will always have access to variable & function of 
 * Outer function even if the outer function not anymore in stack
 * 
 * This is what we call closure in JS
 */

function outer() {
    let outerVar = 10;
    console.log("Outer function called ");

    return function inner(secondNum) {
        console.log("inner function called ");
        return outerVar + secondNum;
    }
}

let innerFnRef = outer();
console.log("in-between");
let rval = innerFnRef(20);
console.log("rval: ", rval);