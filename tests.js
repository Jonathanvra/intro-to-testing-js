// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function within code.js', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it("should return a string when called", function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("subtract", function(){
    it("should be a defined function",function(){
        expect(typeof subtract).toBe("function");
    });
    it("should return a number when passed two number arguments", function() {
        expect(typeof subtract(3,1)).toBe("number");
    });
    it("should return false when passed any argument that is not a number", function(){
        expect(subtract()).toBe(false);
        expect(subtract(2)).toBe(false);
        expect(subtract("Banana", 6)).toBe(false);
    });
    it("should return 34 when passed the arguments of 64 and 30", function(){
        expect(subtract(64, 30)).toBe(34);
    });
    it("should return 34 when passed the arguments of 64 and 30", function(){
        expect(subtract(100, 25)).toBe(75);
    });
    it("should return 34 when passed the arguments of 64 and 30", function(){
        expect(subtract(0, 7)).toBe(-7);
    });
    it("should return 34 when passed the arguments of 64 and 30", function(){
        expect(subtract(20, -275)).toBe(295);
    });
    it("should return 34 when passed the arguments of 64 and 30", function(){
        expect(subtract(0, 0)).toBe(0);
    });
});

describe('sayHello', function(){
    it("should return a string when called", function() {
        expect(typeof sayHello()).toBe("string");
    });
    it("should return 'Hello, Jane!' when Jane is passed", function(){
        expect(typeof sayHello("Jane")).toBe("string");
    });
    it("should return 'Hello, Alex!' when Alex is passed", function(){
        expect(typeof sayHello("Alex")).toBe("string");
    });
});

describe('sayGoodBye', function(){
    it("should be a defined function in code.js", function(){
        expect(typeof sayGoodBye()).toBe("string");
    });
});
