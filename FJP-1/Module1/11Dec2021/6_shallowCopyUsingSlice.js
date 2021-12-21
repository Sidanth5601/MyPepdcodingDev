let o1 = {
    age : 100
}
let o2 = {
    age : 200
}
let o3 = {
    age : 300
}

let arr = [o1, o2, o3];
displayObjectArray(arr);

let arrClone = arr.slice();
displayObjectArray(arrClone);


arrClone[0].age = 110; // only clone is change it is reflected in arr also 
displayObjectArray(arr); // this is shallow copy (don't use slice in Array of objects)
displayObjectArray(arrClone);

function displayObjectArray(arr){
    let str = "";
    for(let i = 0; i < arr.length; i++){
        str += arr[i].age + ", ";
    }
    console.log(str);
}