var TraceGermPage = require('./tracegerm.page.js');

describe('TraceGerm - Alerts', function() {

    var traceGermPage = new TraceGermPage();
    const URL = '/#!/about';

    beforeEach(function() {
        return browser.get(URL);
    });

    describe('About page: ', function() {

        it('should have about title', function () {
            expect(traceGermPage.aboutTitle.isPresent()).toBe(true);
        });

        it('should have about description', function () {
            expect(traceGermPage.aboutDescription.isPresent()).toBe(true);
        });

        it('should not have alerts table', function () {
            expect(traceGermPage.alertsTable.isPresent()).toBe(false);
        });

        it('should not have username header', function () {
            expect(traceGermPage.usernameHeader.isPresent()).toBe(false);
        });

        it('should not have alert time header', function () {
            expect(traceGermPage.alertTimeHeader.isPresent()).toBe(false);
        });

        it('should not have accepted header', function () {
            expect(traceGermPage.acceptedHeader.isPresent()).toBe(false);
        });

        it('should not have remove header', function () {
            expect(traceGermPage.removeHeader.isPresent()).toBe(false);
        });

    });
});