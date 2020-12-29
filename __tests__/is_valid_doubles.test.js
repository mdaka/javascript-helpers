const isNumber = require("../is_number");


// test(name, function, timeout)
// Alias to test => it(name, function, timeout)
// describe(name, function)

describe('Numbers of type double', () => {
    
    describe('Are they valid as double', () => {
        test("Is 0.555 a valid number?", () => {
            expect(isNumber(0.555)).toBeTruthy();
        });
        
        test("Is 1.00 a valid number?", () => {
            expect(isNumber(1.00)).toBeTruthy();
        });
    });



    describe('Are they valid within string', () => {
    
        test("Is '.5' a valid number?", () => {
            expect(isNumber('.5')).toBeTruthy();
        });
        
        test("Is '0.555' a valid number?", () => {
            expect(isNumber('0.555')).toBeTruthy();
        });
        
        test("Is '1.00' a valid number?", () => {
            expect(isNumber('1.00')).toBeTruthy();
        });
    
    });


    describe('Are they valid within string AND including spaces ', () => {
        
        // '.5'         => false , true if point is allowed to be at first
        // ' .5'        => false if spaces are prevented, true if spaces are allowed
        // ' .5  '      => false if spaces are prevented, true if spaces are allowed
        // '  5.00'     => false if spaces are prevented, true if spaces are allowed

        test("Is '.5' a valid number?", () => {
            expect(isNumber('.5')).toBeTruthy();
        });
        
        test("Is '  .5' a valid number?", () => {
            expect(isNumber('  .5')).toBeTruthy();
        });
        

        test("Is '  .5  ' a valid number?", () => {
            expect(isNumber('  .5  ')).toBeTruthy();
        });

        test("Is '  5.00' a valid number?", () => {
            expect(isNumber('  5.00')).toBeTruthy();
        });
    });

});





