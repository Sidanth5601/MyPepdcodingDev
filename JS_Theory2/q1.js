// function outer() {
//     let arrFn = [];
//     // block 1, block 2, block 3
//     for (var i = 0; i < 3; i++) {
//         arrFn.push(function fn() {
//             console.log(i);
//         })
//     }
//     return arrFn;
// }

// let arrFn = outer();

// arrFn[0]();
// arrFn[1]();
// arrFn[2]();
// output -> 3 3 3



// // Problem -> make the above code to print 0 1 2
// // solution-1 
// function outer() {
//     let arrFn = [];
//     for (var i = 0; i < 3; i++) {
//         arrFn.push((function fn() {
//             console.log(i);
//         })()); // called right here while pushing
//     }
//     return arrFn;
// }

// let arrFn = outer();

// arrFn[0]();
// arrFn[1]();
// arrFn[2]();
// // output -> 0 1 2




// // solution-2 using var
// function outer() {
//     let arrFn = [];
//     for (var i = 0; i < 3; i++) {
//         function outerFn() {
//             var j = i;
//             return function inner() {
//                 console.log(j, i);
//             }
//         }
//         arrFn.push(outerFn() ) 
//     }
//     return arrFn;
// }

// let arrFno = outer();

// arrFno[0]();
// arrFno[1]();
// arrFno[2]();
// // // output -> 0 1 2

// Explanation why its is working...............
// When arrFn0[0] (i.e inner() ) is called then the closure for inner() will be outerFn where j = 0
// When arrFn0[1] is called then the closure for inner() will be outerFn where j = 1
// When arrFn0[2] is called then the closure for inner() will be outerFn where j = 2

// for inner() -> outerFn() is closure where j is 0, 1, 2 because for 3 seperate outerFn j is differemt
// for outerFn() -> outer() is closure where i is 3





// solution-3 using let
// var -> mai closure bana tha h where i latest value is stored = 3 and only one closure is created
// let -> mai Block ban tha h where for different function push different i value block is saved

// Read var vs let - > link: https://www.educative.io/courses/data-structures-coding-interviews-javascript/JYlGlXpOP62?aid=5082902844932096&utm_source=google&utm_medium=cpc&utm_campaign=dynamic2&utm_term=&utm_campaign=Dynamic+Search+ads+-+India+-+NEW&utm_source=adwords&utm_medium=ppc&hsa_acc=5451446008&hsa_cam=11957940667&hsa_grp=113685778297&hsa_ad=489097595987&hsa_src=g&hsa_tgt=dsa-1064281173253&hsa_kw=&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjw-ZCKBhBkEiwAM4qfF0IpGr5a32GgeKIGadTfGeL2fcf4hPAKK4LNpyL87kFWZHk7BC7dFBoC5QMQAvD_BwE
// var is function scoped, can be redeclared
// let is block scoped, cannot be redeclared
// const is block scoped, cannot be redeclared & reassigned

function outer() {
    let arrFn = [];
    for (let i = 0; i < 3; i++) {
        arrFn.push(function fn() {
            console.log(i);
        })
    }
    return arrFn;
}

let arrFn = outer();

arrFn[0]();
arrFn[1]();
arrFn[2]();