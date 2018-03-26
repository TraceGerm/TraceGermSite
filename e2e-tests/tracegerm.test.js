var TraceGermPage = require('./tracegerm.page.js');

describe('TraceGerm - Alerts', function() {

    var traceGermPage = new TraceGermPage();
    const URL = '/#';

    beforeEach(function() {
        return browser.get(URL);
    });

    describe('Home page: ', function() {

        it('should have title button', function () {
            expect(traceGermPage.applicationTitleButton.isPresent()).toBe(true);
        });

        it('should have menu option home', function () {
            expect(traceGermPage.homeMenuItem.isPresent()).toBe(true);
        });

        it('should have menu option about', function () {
            expect(traceGermPage.aboutMenuItem.isPresent()).toBe(true);
        });

        it('should change page when clicking about', function () {
            traceGermPage.aboutMenuItem.click();
            expect(browser.getCurrentUrl()).toEqual('http://localhost:9090/#!/about');
        });

        it('should change page when clicking home', function () {
            traceGermPage.homeMenuItem.click();
            expect(browser.getCurrentUrl()).toEqual('http://localhost:9090/#!/alerts');
        });

    });

});