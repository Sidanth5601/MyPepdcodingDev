let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs");

console.log("before");

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard", cb);
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


// -------------cheerio---------------async module i
// --------for Extraction for received data from request----------

function dataExtracter(html) {
    // search tool
    let searchTool = cheerio.load(html);
    // global tool
    // page ke uder -> table -> uske uder 'tbody' -> uske uder wale saare 'tr' dedo
    let bowlers = searchTool(".table.bowler tbody tr"); // bowler is array becoz 'tr' are more than one element

// EXTRA
    // seperate the section u need --> for better view & to select 

    // Aim : get 2 table data and how to store it
    // let htmlData = "";
    // for(let i = 0; i < bowlerTables.length; i++) {
    //     // html function
    //     htmlData += searchTool(bowlerTables[i].html()); // html used for making each row data in html format
    // }
    // fs.writeFileSync("table.html", htmlData);


    // now loop 
    // get name and wicket column data

    let hwt = 0;
    let bowlerName = "";
    for(let i = 0; i < bowlers.length; i++) {
        // from row -> get each col 
        let cols = searchTool(bowlers[i]).find("td");
        let name = searchTool(cols[0]).text();
        let wickets = searchTool(cols[4]).text();
        console.log(name + " " + wickets);
        console.log("-----------------------------" );
        if(hwt <= wickets) {
            bowlerName = name;
            hwt = wickets;
        }
        
    }
    
    console.log("highest wkts : " , bowlerName + " \nno of wkts " + hwt);

}


console.log("After");