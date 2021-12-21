console.log("before") 

setTimeout(function sp1(){
    console.log("i am sp1") 
}, 2000)

setTimeout(function sp2(){
    console.log("i am sp2") 
}, 1000)


function sayBye() {
    console.log("BYE") 
}
sayBye();

// before
// bye
// i am sp2
// i am sp1