describe('cat', function() {
    var testCat; 
    var initialAge; 
    
    beforeEach(function(){
        testCat = cat(); 
        initialAge = testCat.age; 
    })

    it('should be able to grow', function() {
        testCat.grow();
        expect(initialAge).toBeLessThan(testCat.age)
    });

    it('should start as a kitten', function() {
        expect(testCat.isAdult()).toBe(false); 
    });
});


describe('Calculator', function() { 

    describe('verify', function() {

        it('should be satisfied when given numbers', function() {
            testcase = Calculator.verify(2,2); 
            expect(testcase).toBe(true); 
        });

        it('should not pass when given anything but numbers', function() {
            testcase = Calculator.verify(2,'apple'); 
            expect(Calculator.verify('nope', 2)).toBe(false); 
        });

    }); 

    describe('add', function() {   

        it('should add two numbers together', function() {
            testcase = Calculator.add(2,2); 
            expect(testcase).toBe(4); 
        });

        it('should only allow numbers', function() {
            testcase = function(){Calculator.add(2, 'two');}; 
            expect(testcase).toThrow('both inputs must be numbers!'); 
        });

    });

    describe('subtract', function() {  

        it('should subtract two numbers', function() {
            testcase = Calculator.subtract(10,2)
            expect(testcase).toBe(8); 
        });

        it('should only allow numbers', function() {
            testcase = function(){Calculator.subtract(2, 'throw')}; 
            expect(testcase).toThrow('both inputs must be numbers!'); 
        });

    }); 
    
});
