function greet(personName, personAge, callback, callback2) {
     
    let msg = "hello " + personName;

    callback(msg);
    callback2(personAge);
}

function Log(message) {
    console.log(message);
}

function showAge(age) {
    console.log(age);
}

greet("steve", 25, Log, showAge);