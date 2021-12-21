/**
 * last ball commentary data extracted
 */

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary";

 let request = require("request");
let cheerio = require("cheerio");
console.log("before");

request(url, cb);
function cb(error, response, html) {
    // console.log("error: " error); // Print error if one occured
    // console.log("body: " html); // Print HTML for the Google homepage

    if (error) {
        console.log(error); // Print error if one occured
    }
    else if (response.statusCode == 404) {
        console.log("Page Not Found");
    }
    else {
        // console.log(html); // Print the body of given url
        dataExtracter(html);
    }
}


// -------------cheerio---------------async module
// take away : initially you don't get all the data 
function dataExtracter(html) {
    // search tool
    let searchTool = cheerio.load(html);
    // you always can't get unique selector so, u have to work with array of elements
    let elemRepArr = searchTool(".match-comment-wrapper .match-comment-long-text");
    // console.log(elemRepArr.length); // 22 -> 22 array size means it contents many ball commentary
    // cram this -> this

    let lbc = searchTool(elemRepArr[0]); // no direct access elemRepArr[0] use with searchTool
    console.log(lbc.text()); // I only need text part 
    
}


console.log("After");