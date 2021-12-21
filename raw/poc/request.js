// npm i request // install request module from npm

// 
let request = require("request");
let cheerio = require("cheerio");
console.log("before");

request("https://www.npmjs.com/package/cheerio", cb);
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
    // npm i cheerio
function dataExtracter(html) {
    // search tool
    let searchTool = cheerio.load(html);
    
    // pass a css selector ot searchTool function
    let elemRep = searchTool("#readme>h1");
    
    // access text 
    let moduleName = elemRep.text().trim();
    console.log("moduleName: ", moduleName);
}


console.log("After");