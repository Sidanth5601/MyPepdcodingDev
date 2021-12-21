function processData(input) {
    //Enter your code here
    

    let inputArr = input.split("\n"); // 2 string mil gya 
    // console.log(inputArr);
    // console.log(inputArr[0]);
    // console.log(inputArr[1]);
    let arr1 = JSON.parse(inputArr[0]) // cabable of changing one at a time;
    let arr2 = JSON.parse(inputArr[1]);
    // console.log(arr1);
    // console.log(arr2);
    
    let resArr = [];
    
    for(let i = 0; i < arr1.length ; i++) {
        if(resArr.includes(arr1[i]) == false) {
            resArr.push(arr1[i]);
        }   
    }
    
    for(let i = 0; i < arr2.length ; i++) {
        if(resArr.includes(arr2[i]) == false) {
                resArr.push(arr2[i]);
            }   
        }
    
    
    
    console.log(resArr);
 
}
let input = `1 2 3` + "\n" + `100 2 3 100 10` ;
processData(input);