/**
 * @MULTIPLE_FILES 
 * @brief how to write code in Multiple Files  in JS (similar to headerfile's)
 * 
 */
// function 
function fn() {
    console.log("Hello I am fn and coming from lib.js file");
}

function donotExport() {
    console.log("I don't want to export");
}

// variables 
let a = 10;

module.exports = {
    varName : a,
    fxn : fn
};
