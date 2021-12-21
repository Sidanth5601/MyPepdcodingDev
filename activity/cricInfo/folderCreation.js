let fs = require("fs");
let path = require("path");

let cwd = process.cwd();
let iplFolderPath = path.join(cwd, "ipl2021");
dirCreater(iplFolderPath);

function singlePlayerProcessingJSON(myTeamName, name, venue, data, opponentTeamName, result, runs, balls, fours, sixes, sr) {
    // 1 team folder
    let teamFolderPath = path.join(iplFolderPath, myTeamName);
    dirCreater(teamFolderPath);

    let content = [];
    let playerObj = { myTeamName, name, venue, data, opponentTeamName, result, runs, balls, fours, sixes, sr };

    let playerFilePath = path.join(teamFolderPath, name + ".json");
   
    // if file already exist
    if(fs.existsSync(playerFilePath) == true && fs.lstatSync(playerFilePath).isFile() == true) {
        let JSONcontent = fs.readFileSync(playerFilePath);
        JSONcontent = JSON.parse(JSONcontent); // jsonWritable 
        JSONcontent.push(playerObj);
        let writableJSON1 = JSON.stringify(JSONcontent);
        fs.writeFileSync(playerFilePath, writableJSON1);
    }
    else { // no existing file exists
        content.push(playerObj);
        let writableJSON2 = JSON.stringify(content);
        fs.writeFileSync(playerFilePath, writableJSON2);
    }


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
    playerFilendFolder : singlePlayerProcessingJSON
};





// // testing
// singlePlayerProcessing("Delhi", "sidanth", "r.k.puram", "14-07-2021", "chennai", "win", 36, 26, 3, 3, 121.0 );
// singlePlayerProcessing("Delhi", "sidanth", "r.k.puram", "14-07-2021", "assam", "win", 36, 26, 3, 3, 121.0 );
// singlePlayerProcessing("Delhi", "sidanth", "r.k.puram", "14-07-2021", "nepal", "win", 36, 26, 3, 3, 121.0 );
// singlePlayerProcessing("Nepal", "Om", "r.k.puram", "14-07-2021", "sikkim", "win", 36, 26, 3, 3, 121.0 );
// singlePlayerProcessing("Nepal", "Om", "r.k.puram", "14-07-2021", "sikkim", "win", 36, 26, 3, 3, 121.0 );
// singlePlayerProcessing("NewzLand", "harshadh", "r.k.puram", "14-07-2021", "nepal", "win", 36, 26, 3, 3, 121.0 );