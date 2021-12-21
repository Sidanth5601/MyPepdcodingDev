
let a1 = [10, 30, 50, 70, 90];
let a2 = [63, 34, 50, 90, 80, 10, 60];
// 10, 50, 90

console.log(a2.includes(80));
console.log(a2.includes(88));

let inter1 = a1.filter(v => a2.includes(v));
console.log(inter1);

// Task 1: intersect using only reduce, map , filter and include
let arr2d = [
    [10, 50, 70, 80, 90, 100, 30, 60],
    [11, 50, 75, 85, 90, 100, 34, 60], // 50, 90, 100, 60
    [10, 51, 70, 80, 90, 100, 30, 60], // 90, 100, 60
    [11, 50, 75, 85, 92, 100, 34, 60], // 100, 60
    [10, 50, 70, 80, 90, 100, 30, 60], // 100
];

let inter2 = arr2d.reduce(function(pv, cv, ci, oarr){
    console.log(pv + " #### " + cv);
    let inter = pv.filter(v => cv.includes(v));
    return inter;
});

console.log(inter2);
// [10, 50, 70, 80, 90, 100, 30, 60] [11, 50, 75, 85, 90, 100, 34, 60] => [50, 90, 100, 60]
// [50, 90, 100, 60] [10, 51, 70, 80, 90, 100, 30, 60] => [90, 100, 60]
// [90, 100, 60] [11, 50, 75, 85, 92, 100, 34, 60] => [100, 60]
// [100, 60] [10, 50, 70, 80, 90, 100, 30, 61] => [100]

// [100]






// Task 1: intersect using only reduce, map , filter and include
let arr2d = [[2, 8, 10, 73], [2, 34], [2 ,45, 31, 25, 10, 64, 72, 88], [2, 64], [2, 25, 73]];

let arr = [];
// intersection of arrays = common elements in everyone

// let inters2 = arr2d[0];
// inters2 = arr2d.filter(v => {
//     for(let i = 0; i < v.length; i++){
//        return  inters2.includes( v[i] );
//     }
//     }
// )
// console.log(inters2)

let inters3 = arr2d[0];
for(let row in arr2d) {
    for(let i = 0; i < arr2d[row].length; i++){
        // console.log(arr2d[row][i])
          inters3.filter(v =>  inters3.includes(arr2d[row][i]));
    }
} 
console.log(inters3)
