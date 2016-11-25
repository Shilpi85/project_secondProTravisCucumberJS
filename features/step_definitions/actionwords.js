
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = require('chai').expect;

actionwords = {
    iOpenP1: function (p1) {
        browser.get(p1);
    },
    iWantToDoP1P2P3: function (p1, p2, p3) {
        element(by.model('first')).sendKeys(p1);
        element(by.model('operator')).sendKeys(p2);
        element(by.model('second')).sendKeys(p3);
        element(by.id('gobutton')).click();
    },
    resultOfOperationShouldEqualP1: function (p1) {
        browser.sleep(5000);
        element(by.binding('result.value')).getText().then(function(value){
            console.log('Value of Result is: ' + value);
            expect(value).to.equal(p1);
        });

    },
    testStep: function () {

    },
    test: function () {

    }
};
module.exports = actionwords;