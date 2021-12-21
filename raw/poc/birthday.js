let request = require("request");
let cheerio = require("cheerio");

let bowlernames = [];
let bowlerAges = [];
let bowlerArr = [];
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard";
console.log("before");

request(url, cb);
function cb(error, response, html) {

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
function dataExtracter(html) {
    // search tool
    let searchTool = cheerio.load(html);
    // global tool
    // page ke uder -> table -> uske uder 'tr' wale sab dedo
    let bowlers = searchTool(".table.bowler tbody tr"); // row mil gye 

   
    for(let i = 0; i < bowlers.length; i++) { // row mai traverse kiya
        // from row -> get each col 
        let cols = searchTool(bowlers[i]).find("td");
        if (cols.length > 1) {
            
        }
        if(cols.length > 1) {
            let anchorElem = searchTool(cols[0]).find("a");
            let link = anchorElem.attr("href"); // get attribute 
            // link
            // to reach new page -> get href link -> complete it -> request again to new link -> 
            // once request done, callback is called to worked on the data
            let fullLink = `https://www.espncricinfo.com${link}`;
            request(fullLink, newcb); // request FOR new data from new page
        }
     
    }

    function newcb(error, response, html) {
        if(error) {
            console.log(error);
        }
        else if(response.statusCode == 404) {
            console.log("Page not found");
        }
        else {
            console.log("------------------------");
            getBirthDay(html); // extraction USING CHEERIO
        }
    }
}

    function getBirthDay(html) {
        let searchTool = cheerio.load(html);
        let headingArr = searchTool(".player-card-description");
        let age = searchTool(headingArr[2]).text();
        let name = searchTool(headingArr[0]).text();
        console.log(name, " ", age );

        bowlernames.push(name);
        bowlerAges.push(age);
        bowlerAges.sort();
        console.log(bowlerAges);
    }
    

console.log("After");