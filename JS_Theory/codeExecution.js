// console.log(a);
// console.log(b);
// var a;
// var b;
// a = 10;
// b = [1, 2, 3];
// console.log(a);
// console.log(b);

// fn();
// function fn() {
//     console.log("Thank you for call");
// }
// fn();



// // NEW EC

// console.log(a);
// var a;
// a = 10;
// console.log(a);

// fn();
// function fn() {
//     console.log("Val of 'a' inside function: ", a); // first search inside fn() is there varible 'a' somewhere inside fn(),  if not then find in global 
//     var a = 11;
//     console.log("Thank you for call val of a inside funtion " , a);
// }
// fn();



/**
 *  Example 3 for new EC
 * 
 * first fn() search variable "a" inside fn() itself; if there is "a" variable is present or not
 *    //  if present use its own "a" value
 *     // else use search in global EC and use global "a";
 * 
 */

// console.log(a);
// var a;
// a = 10;
// console.log(a);

// fn();
// function fn() {
//     console.log("Inside function 'a' is:  ", a); // first search inside fn() is there varible 'a' somewhere inside fn(),  if not then find in global 
//     a++;
//     console.log("Thank you for call val of a inside funtion " , a);
// }
// fn();
// console.log("final a value : ", a);





// Lexial scope
// pending......








// var scope
var a =10; 
function fn() {
    var a = 20;
    a++;
    console.log("inside fun() line no 77 ", a);
    if(true) {
     var a = 30;
     a++;
     console.log("inside fun() line no 80 ", a);
    }
    console.log("inside fun() line no 83", a);
}

console.log("outside fun() line no 86 ", a);
fn();
console.log("outside fun() line no 88 ", a);



