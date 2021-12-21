let url = "https://github.com/reduxjs/react-redux";
let request = require("request");
let cheerio = require("cheerio");

function singleRepoIssues(url) {
    console.log(url);
    request(url, function(error, response, html) {
    if (error) console.log(error);
    else if (response.statusCode == 404) console.log("Page Not Found");
    else extractionIssueData(html);
    })
}

function extractionIssueData(html) {
    let $ = cheerio.load(html);
    let issueContentArrElem =  $(`a[data-hovercard-type="issue"]`);
    for(let i = 0; i < issueContentArrElem.length; i++) {
        let content = $(issueContentArrElem[i]).attr("href");
        
    }
}

module.exports = {
    sri : singleRepoIssues
}