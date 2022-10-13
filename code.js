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
function sayHello(str) {
    if (str === "Jane") {
        return "Hello, Jane!";
    } else if(str === "Alex") {
        return "Hello, Alex"
    }

    else {
        return "Hello!"
    }
}
function sayGoodBye() {
    return "Good Bye!";
}


