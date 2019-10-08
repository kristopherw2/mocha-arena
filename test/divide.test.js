const expect = require("chai").expect
const divide = require('../index')

describe('Divide function', () => { 
    it('should divide postive integers correctly', () => {
        const a = 8;
        const b = 4;
        const expectedAnswer = 2;

        const actualAnswer = divide(a, b);
        expect(actualAnswer).to.equal(expectedAnswer)
    });

    it('should throw an error when divide by zero', () => {
        const fn = () => {divide(a, b)}

        expect(fn).to.throw();
    })

    it('this is the new test case', () => {
        expect(2).to.equal(2, '2 === 2')
        expect(2).to.equal("2", '2 === "2"')
        expect(2).to.equal(3, '2 === 3')
        expect('hen').to.equal('Hen', "'hen'== 'Hen'")
    })
})