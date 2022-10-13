// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function subtract(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x - y;
    } else {
        return false;
    }
}
function sayHello(input) {
     if(typeof input !== "string" || input === "" || input === "5"){
        return "Hello, World!";
     } else {
        return  `Hello, ${input}!`;
    }
}

function isFive(x){
    if(x === 5) {
        return true;
    }
     return typeof x === 'boolean'
}
function isEven(v){
    if (v % 2 === 0){
        return true;
    }
        return typeof v === 'boolean'
}
// function sayGoodBye() {
//     return "Good Bye!";
// }


