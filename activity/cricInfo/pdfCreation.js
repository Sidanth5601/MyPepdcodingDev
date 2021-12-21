let fs = require("fs");
let path = require("path");
let xlsx = require("xlsx")

let cwd = process.cwd();
let iplFolderPath = path.join(cwd, "ipl2021");
dirCreater(iplFolderPath);

function singlePlayerProcessingPDF(myTeamName, playername, venue, data, opponentTeamName, result, runs, balls, fours, sixes, sr) {
    // 1 team folder
    let teamFolderPath = path.join(iplFolderPath, myTeamName);
    dirCreater(teamFolderPath);

    let content = [];
    let playerObj = { myTeamName, name: playername, venue, data, opponentTeamName, result, runs, balls, fours, sixes, sr };

    let playerFilePath = path.join(teamFolderPath, playername + ".xlsx");
   
    // no file already exist
    if(fs.existsSync(playerFilePath) == false) {
        content.push(playerObj);
    }
    else { // already file exists
        content = excelReader(playerFilePath, playername)
        content.push(playerObj);
    }

    excelWriter(playerFilePath, content, playername);

}

function dirCreater(dirPath) {
    if(fs.existsSync(dirPath) == false) {
        fs.mkdirSync(dirPath);
    }
}

function excelWriter(filePath, json, sheetName) {
    // workbook create
    let newWB = xlsx.utils.book_new();
    // worksheet
    let newWS = xlsx.utils.json_to_sheet(json);
    xlsx.utils.book_append_sheet(newWB, newWS, sheetName);
    // excel file create 
    xlsx.writeFile(newWB, filePath);
}
// // json data -> excel format convert
// // -> newwb , ws , sheet name
// // filePath
// read 
//  workbook get
function excelReader(filePath, sheetName) {
    // player workbook
    let wb = xlsx.readFile(filePath);
    // get data from a particular sheet in that wb
    let excelData = wb.Sheets[sheetName];
    // sheet to json 
    let ans = xlsx.utils.sheet_to_json(excelData);
    return ans;
}

module.exports = {
    playerFilendFolder : singlePlayerProcessingPDF
};