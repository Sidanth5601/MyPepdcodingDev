// let inputUrl = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
let request = require ("request");
let cheerio = require ("cheerio");
let fs = require("fs");
let jsonFolderCreationObj = require("./folderCreation");
let pdfFolderCreationObj = require("./pdfCreation");


// linking 2 files
function processingSingleMatch(inputUrl) {
    // request 
    request(inputUrl, cb);
}
function cb(error, response, html) {
    if(error) {
        console.log(error);
    }
    else if(response.statusCode == 404) { 
        console.log("Page Not Found") 
    }
    else {
        printTeamPlayerNames(html);
    }
}

// extraction
function printTeamPlayerNames(html) {
    let searchTool = cheerio.load(html);
    // team name
    let twoInnings = searchTool(".Collapsible");
    // console.log(twoInnings.length);
    let scorecard = "";
    for(let i = 0; i < twoInnings.length; i++) {
        // scorecard = searchTool(twoInnings[i]).html(); // seperating what we need
        // fs.writeFileSync(`innings${i + 1}.html`, scorecard); // so, that its easy to search
        let teamNameElem = searchTool(twoInnings[i]).find("h5");
        let teamName = teamNameElem.text();
        // console.log(teamName);
        teamName = teamName.split("INNINGS")[0];
        teamName = teamName.trim();
        console.log(teamName);
    console.log("```````````````````````````````````");
        
        let batsmenTableRows = searchTool(twoInnings[i]).find(".table.batsman tbody tr");
        // console.log(batsmenTableRows.length);
        for(let j = 0; j < batsmenTableRows.length; j++) {
            let noOfTds = searchTool(batsmenTableRows[j]).find("td");
            // console.log(noOfTds.length);
            if(noOfTds.length == 8) {
                let playerName = searchTool(noOfTds[0]).text();
                let runs = searchTool(noOfTds[2]).text();
                let balls = searchTool(noOfTds[3]).text();
                let fours = searchTool(noOfTds[5]).text();
                let sixes = searchTool(noOfTds[6]).text();
                let sr = searchTool(noOfTds[7]).text();
                console.log(playerName, runs, balls , fours, sixes, sr);

                // let venueDateElem = searchTool(".match-info.match-info-MATCH.match-info-MATCH-half-width .description");
                let venueDateElem = searchTool(".match-header-info.match-info-MATCH .description"); // 2
                venueDateElem = venueDateElem.text().split(",");
                let venue = venueDateElem[1].trim();
                let matchDate = venueDateElem[2].trim();

                let resultElem = searchTool(".match-info.match-info-MATCH.match-info-MATCH-half-width .status-text span");
                let result = resultElem.text();
                let opponentTeamNameElem = searchTool(".match-info.match-info-MATCH.match-info-MATCH-half-width .name");
                if(i == 0) {
                    opponentTeamName = searchTool(opponentTeamNameElem[1]).text();
                }
                else {
                    opponentTeamName = searchTool(opponentTeamNameElem[0]).text();
                }
                // console.log(result)
                // console.log(venue);
                // console.log(matchDate);
                // console.log(opponentTeamName);

                // jsonFolderCreationObj.playerFilendFolder(teamName, playerName, venue, matchDate, opponentTeamName, result, runs, balls, fours, sixes, sr );
                pdfFolderCreationObj.playerFilendFolder(teamName, playerName, venue, matchDate, opponentTeamName, result, runs, balls, fours, sixes, sr );

            }
        }
    console.log("```````````````````````````````````");
    }
    
}

module.exports = {
    psm : processingSingleMatch
}