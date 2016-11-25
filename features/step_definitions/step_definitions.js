var getactionwords = require('./actionwords.js');

module.exports = function () {
    this.setDefaultTimeout(60 * 1000);
    var bactionwords = getactionwords;
   // this.actionwords = Object.create(getactionwords);
    this.Before(function (scenario) {
        this.actionwords = Object.create(getactionwords);//Object.create(require('./actionwords.js').Actionwords);
    });

    this.After(function (scenario) {
        this.actionwords = null;
    });


    this.Given(/^I open "(.*)"$/, function (p1) {
        return  browser.sleep(25).then(function () {
            bactionwords.iOpenP1(p1);
            //  browser.sleep(20).then(callback);
        });
    });

    this.When(/^I want to do "(.*)" "(.*)" "(.*)"$/, function (p1, p2, p3) {
        return  browser.sleep(25).then(function () {
            bactionwords.iWantToDoP1P2P3(p1, p2, p3);
        });
      //  browser.sleep(20).then(callback);
    });

    this.Then(/^result of operation should equal "(.*)"$/, function (p1) {
        return  browser.sleep(25).then(function () {
            bactionwords.resultOfOperationShouldEqualP1(p1);
        });
     //   browser.sleep(20).then(callback);
    });
}
