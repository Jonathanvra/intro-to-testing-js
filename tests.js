// Unit tests for the helloWorld function
// describe('helloWorld', function() {
//     it('should be a defined function within code.js', function() {
//       expect(typeof helloWorld).toBe('function');
//     });
//     it("should return a string when called", function() {
//       expect(typeof helloWorld()).toBe("string");
//     });
//     it('should return the string "Hello, World!" when executed', function() {
//       expect(helloWorld()).toBe("Hello, World!");
//     });
//     it("should never return 'undefined' when called", function() {
//       expect(helloWorld()).not.toBe(undefined);
//     });
// });
//
// describe("subtract", function(){
//     it("should be a defined function",function(){
//         expect(typeof subtract).toBe("function");
//     });
//     it("should return a number when passed two number arguments", function() {
//         expect(typeof subtract(3,1)).toBe("number");
//     });
//     it("should return false when passed any argument that is not a number", function(){
//         expect(subtract()).toBe(false);
//         expect(subtract(2)).toBe(false);
//         expect(subtract("Banana", 6)).toBe(false);
//     });
//     it("should return 34 when passed the arguments of 64 and 30", function(){
//         expect(subtract(64, 30)).toBe(34);
//     });
//     it("should return 34 when passed the arguments of 64 and 30", function(){
//         expect(subtract(100, 25)).toBe(75);
//     });
//     it("should return 34 when passed the arguments of 64 and 30", function(){
//         expect(subtract(0, 7)).toBe(-7);
//     });
//     it("should return 34 when passed the arguments of 64 and 30", function(){
//         expect(subtract(20, -275)).toBe(295);
//     });
//     it("should return 34 when passed the arguments of 64 and 30", function(){
//         expect(subtract(0, 0)).toBe(0);
//     });
// });

describe('sayHello', function(){
    it("should return a defined function in code.js", function() {
        expect(typeof sayHello()).toBe("string");
    });
    it("should return 'Hello, Jane!' when Jane is passed", function(){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("should return 'Hello, Alex!' when Alex is passed", function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("should return 'Hello, Pat!' when Pat is passed", function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    })
    it("should return 'Hello, World!' when undefined is passed", function(){
        expect(typeof sayHello(undefined)).toBe("string");
    })
    it("should return 'Hello, World!' when true in the function", function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' when false in the function", function(){
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it("should return 'Hello, World! when null is passed", function(){
       expect(sayHello(null)).toBe("Hello, World!");
    });
    it("should return 'Hello, World! when '' is passed", function(){
        expect(sayHello("")).toBe("Hello, World!");
    });
    it("should return 'Hello, World! when 2.3 is passed", function(){
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
    it("should return 'Hello, World! when 5 is passed", function(){
        expect(sayHello("5")).toBe("Hello, World!");
    });
    it("should return 'Hello, World! when [1, 2, 3] is passed", function(){
        expect(sayHello([1, 2, 3])).toBe("Hello, World!");
    });
});

describe("isFive", function(){
    it("should be a defined function", function(){
       expect(typeof isFive).toBe("function");
    });
    it ("should return boolean no matter what the input is", function(){
        expect(typeof isFive()).toBe("boolean");
    });
    it ("should return true when 5 is passed", function(){
        expect(isFive(5)).toBe(true);
    });
    it("should return false when '5'", function(){
        expect(isFive("5")).toBe(false);
    });
});
// TODOne
// Inside of tests.js, write a describe block for our new isFive function.
// As your first, failing test, write an it and an expect asserting that a function named isFive exists.
//     Run the tests by refreshing report.html to show the red, failing test.
//     Write just enough code inside of code.js to define an empty function for isFive.
//                                                                                  Now, refresh report.html to ensure that all tests are green.
//     What other tests and implementation cycles should you do for isFive?
//                                                                      Ensure that isFive returns a boolean no matter what the input
// Ensure that isFive returns true when passed 5
// What about if we pass in the string "5"? Do you want isFive to return true for that?
//                                                                                    If so, write the test, ensure that the test is failing, and then write the implementation
// Commit your work to git and push to GitHub before moving forward.

describe("isEven", function(){
    it("should return as a defined function", function(){
        expect(typeof isEven).toBe("function")
    });
    it("should return a boolean no matter the input", function(){
       expect(typeof isEven()).toBe("boolean");
    });
    it("should return true when passed 4", function(){
       expect(isEven(4)).toBe(true);
    });
});
// toDone
// Start with the smallest tests first. Assert that the function is defined.
//     Write just enough code to green the test
// Build up functionality one small piece at a time.
//     Write each assertion, confirm the test fails, write only enough code to green that specific test, refactor, then repeat.
//     Remember to add and then "green" one test at a time. That's part of the fundamental approach of TDD.
// Assert that isEven:
//     returns a boolean no matter the input
// returns true when executed with isEven(2)
//     returns true when executed with isEven(-4)
//     returns false when executed with isEven(3)
//     returns false when called with isEven("banana")
//     returns true when called with isEven("8")
//     returns false when called with isEven(Infinity)
//     return false when called with a boolean input like isEven(true) or isEven(false)
// returns false when called without an argument like isEven()
// Refactor when and where you can. Be careful not to refactor before you have a handful of green tests.
//     Repeat until the tests are robust and the function works as intended.
//     Commit your work to git and push to GitHub before moving forward.

describe("isVowel", function(){
    it("should return is a defined function", function(){
        expect(typeof isVowel).toBe('function');
    });
    it("should return a boolean no matter the input", function(){
        expect(typeof isVowel()).toBe('boolean');
    })
    it("should return")
});

// Start with the smallest tests first.
//     Write just enough code to green the test
// Build up functionality one small piece at a time.
//     Commit your work to git at each step.
//     Write each assertion, confirm the test fails, write only enough code to green that specific test, refactor, then repeat.
//     Remember to add and then "green" one test at a time. That's part of the fundamental approach of TDD.
// Assert that:
//     isVowel always returns a boolean
// isVowel("a") returns true
// isVowel("A") returns true
// isVowel("y") returns false
// isVowel(4) returns false
// isVowel(true) or isVowel(false) both return false
// isVowel("banana") returns false
// isVowel() returns false
// Refactor when appropriate and possible.
//     Repeat until the tests are robust and the function works as intended.
//     Commit your work to git and push to GitHub before moving forward.



// describe('sayGoodBye', function(){
//     it("should be a defined function in code.js", function(){
//         expect(typeof sayGoodBye()).toBe("string");
//     });
// });
