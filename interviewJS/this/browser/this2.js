
/**
 * @brief : this keyword in Nodejs Enviroment 
 *          In Strict mode
 */

'use strict'

// 1 ----------------------------------------------------------------
// console.log(this) // return window object

// 2 ----------------------------------------------------------------
// function showThis() {
//     console.log(this); // returns  undefined
// }
// showThis();

// 3 ------------------------------------------------
// let obj = {
//     name: 'sid',       // returns object obj itself
//     f: function() {
//         console.log(this);
//     }
// }
// obj.f();


// 4 ------------------------------------------------

let obj = {
    name: 'sid',       // returns object obj itself
    f: function() {
        function g() {
            console.log(this); 
        }
        g();
    }
}
obj.f();

