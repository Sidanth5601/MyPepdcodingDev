let inputUrl = "https://github.com/topics";
let request = require("request");
let cheerio = require("cheerio");
let issuesObj = require("./issues");

// request and cb --> 1
request(inputUrl, function(error, response, html) {// funciton expression
    if (error) console.log(error);
    else if (response.statusCode == 404) console.log("Page Not Found");
    else extractTopicsLinks(html);
});

// extraction
function extractTopicsLinks(html) {
    let $ = cheerio.load(html);
    let topicPageLinksArr = $(".no-underline.d-flex.flex-column.flex-justify-center"); // 3 links
    for (let i = 0; i < topicPageLinksArr.length; i++) {
        let links = $(topicPageLinksArr[i]).attr("href")
        console.log(links);
        let fullLink = "https://github.com/" + links;

        // request and cb --> 2
        request(fullLink, function (error, response, html) {
            if (error) console.log(error);
            else if (response.statusCode == 404) console.log("Page Not Found");
            else repoIssuesPageLinks(html);
        });
    }
}

function repoIssuesPageLinks(html) {
    let $ = cheerio.load(html);
    let repoArrElem = $(`h3 a[data-ga-click="Explore, go to repository, location:explore feed"]`);
    for(let i = 0; i < 8; i++ ) { // first 8 repo only needed
        let link = $(repoArrElem[i]).attr("href");
        let fullRepoLink = "https://github.com/" + link + "/issues";
        // console.log(fullRepoLink);
        issuesObj.sri(fullRepoLink);
        
    }
}