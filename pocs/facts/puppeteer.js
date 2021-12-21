// npm i puppeteer;
// puppeteer docs :
// https://flaviocopes.com/puppeteer/
// https://pptr.dev/

let puppeteer = require("puppeteer");

let browserStartPromise = puppeteer.launch({
    // visible browser
    headless: false,
    // type 1sec
    // slowMo: 1000,

    defaultViewport: null, // full size 
    args: ["--start-maximized", "--disable-notifications"]
});
// Method ONE: PROMISE WRITING 
// // without chaining (nested then)
// browserStartPromise.then(function (browserObj) { // browser mai jo bi krna h tho browserObj use hoga
//     console.log("Browser Opened");
//     let browserTabOpenPromise = browserObj.newPage();
//     browserTabOpenPromise.then(function (page) {
//         console.log("new tab opened ")

//     })
// })

// let gPageOpenPromise = page.goto("https://www.google.com/");
//         gPageOpenPromise.then(function () {
//             console.log("google home page opened");
//         })


// // METHOD TWO: chaining
let page, browser; // common name used by others
let rtab;
browserStartPromise
    .then(function (browserObj) { // iss object ko use krke mai, chromium Browser jo bana h usko "CONTROL KRUNGA"
        browser = browserObj;
        console.log("Browser Opened");
        // new tab or page
        let browserTabOpenPromise = browserObj.newPage();
        return browserTabOpenPromise;
    }).then(function (newTab) { // newTab is the object which will be  used "TO CONTROL" this freshly created Tab 
        page = newTab;
        console.log("new tab opened ")
        let gPageOpenPromise = newTab.goto("https://www.google.com/");
        return gPageOpenPromise;
    }).then(function () {
        console.log("google home page opened");
        // keyboard -> data entry
        let waitForTypingPromise = page.type("input[title='Search']", "pepcoding");
        return waitForTypingPromise;
    }).then(function () {
        // keyboard -> specfic keys
        let enterWillBeDonePromise = page.keyboard.press('Enter', { delay: 100 })
        return enterWillBeDonePromise;
    })
    // .then(function () {
    //   // wait for element to load on page -> use whenever u go to new page
    //     console.log("wait for the element to be visible");
    //     let waitForElementPromise = page.waitForSelector(".LC20lb.DKV0Md", { visible: true }); // visible -> tell kab tak wait kru 
    //     return waitForElementPromise;
    // }).then(function () {
    //     // mouse -> click
    //     let elemClickPromise = page.click(".LC20lb.DKV0Md");
    //     return elemClickPromise;
    // })

    .then(function () {
        // user-defined Promise used
        let wcPromise = waitAndClick(".LC20lb.DKV0Md", page);
        return wcPromise;
    }).then(function () {
        let wcPromise = handleIfNotPresent("#lp_modal_close", page);
        console.log("wcPromise", wcPromise);
        return wcPromise;
    })
    // .then(function () {
    //     // browser.pages -> array of all the open tabs
    //     let waitModalPromise = page.waitForSelector("#lp_modal_close", { delay: 100 });
    //     return waitModalPromise;

    // }).then(function () {
    //     let clickModal = page.click("#lp_modal_close");
    //     return clickModal;
    // })
    .then(function () {
        // get page, multiple elements with same selector in array
        let allLisPromise = page.$$(".site-nav-li");
        return allLisPromise;
    }).then(function (allElem) {
        let elementWillBeClickedPromise = allElem[7].click({ delay: 100 });
        return elementWillBeClickedPromise;
    })
    // resources page is on next tab and next tab will take some time to open
    // resources page is on next tab and next tab will take some time to open 
    .then(function () {
        let waitForLoad = page.waitForNavigation({
            waitUntil: 'networkidle0',
        });
        return waitForLoad;
    }).then(function () {
        let listofOpenedTabsPromise = browser.pages();
        return listofOpenedTabsPromise;
    })
    .then(function (array) {
        rTab = array[array.length - 1];
        let waitforLevel1Promise = rTab.waitForSelector('h2[title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]',
            { visible: true });
        return waitforLevel1Promise;
    }).then(function () {
        let clickLevel1Promise = rTab.click('h2[title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]');
        return clickLevel1Promise;
    }).then(function () {
        console.log("level 1 will be opened");
    })

// user defined promise based fucntion -> it will return
// a promise that will 
// resolved when the user has waited for element to appear as well as we have clicked on it
function waitAndClick(selector, cpage) {
    return new Promise(function (resolve, reject) {
        let waitForElementPromise = cpage.waitForSelector(selector, { visible: true }); // visible -> tell kab tak wait kru 
        waitForElementPromise
            .then(function () {
                let elemClickPromise = cpage.click(selector);
                return elemClickPromise;
            }).then(function () {
                resolve();
            }).catch(function (err) {
                reject(err);
            })
    })

}
// promise -> banner is present or not -> the code will run always
function handleIfNotPresent(selector, cpage) {
    return new Promise(function (resolve, reject) {
        // wait ClickModal
        let waitAndClickPromise = waitAndClick(selector, cpage);
        waitAndClickPromise.then(function () {
            resolve();
        })
        waitAndClickPromise.catch(function (err) {
            resolve();
        })
    })
}