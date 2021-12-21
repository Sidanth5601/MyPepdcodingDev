/**
 * @brief : this keyword in Browser Enviroment 
 *          In NON-Strict mode
 */


// 1 ----------------------------------------------------------------
// console.log(this); // returns Window object



// 2 ----------------------------------------------------------------
// function showThis() {
//     console.log(this); // returns Window object 
// }
// showThis(); 


// 3 ----------------------------------------
// let obj = {
//     name : 'Spidy',
//     f : function() {
//         console.log(this); // return the object obj itself
//     }

// };
// obj.f();

// 4 ------------------------------------------
let obj = {
    name: 'sid',
    f: function () {
        function g() {
            console.log(this); // return Window object
        }
        g();
    }

};
obj.f();