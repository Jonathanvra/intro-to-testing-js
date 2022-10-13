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
    if (input === "Jane") {
        return "Hello, " + input + "!";
    } else if(input === "Alex") {
        return "Hello, " + input + "!";
    } else if(input === "Pat"){
        return "Hello, " + input + "!";
    } else {
        return "Hello, " + input + "!"
    }
}
function sayGoodBye() {
    return "Good Bye!";
}


