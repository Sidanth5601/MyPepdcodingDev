let link = https://dmitripavlutin.com/javascript-closures-interview-questions/;

//Q5
function createIncrement() {
  let count = 0;
  function increment() { 
    count++;
  }

  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  
  return [increment, log];
}

const [increment, log] = createIncrement();
increment(); 
increment(); 
increment(); 
log(); // What is logged?

// explanation: 
// the var is function-scoped which creates closure but, let is block-scope which creates block
// but in this question for 'let count' variable the scope is itself the function same as var
// so, its is treated as same as var hence closure is created rather than block


// var is function scoped, can be redeclared
// let is block scoped, cannot be redeclared
// const is block scoped, cannot be redeclared & reassigne

// let -> create block scope only when its is in a different block other than function
// var -> creates closure  

