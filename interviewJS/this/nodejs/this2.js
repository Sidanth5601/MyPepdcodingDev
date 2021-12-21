
/**
 * @brief : this keyword in Nodejs Enviroment 
 *          In Strict mode
 */

'use strict'

// 1 ----------------------------------------------------------------
// console.log(this); // returns  object {}    

// 2 ----------------------------------------------------------------
// function showThis() {
//     console.log(this); // returns  undefined
// }
// showThis();

// 3 ------------------------------------------------

// let obj = {
//     name : "sid",
//     f :function() {
//         console.log(this); // returns object obj itself
//     }
// };
// obj.f();

// 4 ------------------------------------------------

let obj = {
    name : "sid",
    f :function() {
        function g() {
            console.log(this); // returns undefined
        }
        g();
    }
};
obj.f();
