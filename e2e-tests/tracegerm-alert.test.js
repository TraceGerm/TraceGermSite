var TraceGermPage = require('./tracegerm.page.js');

describe('TraceGerm - Alerts', function() {

    var traceGermPage = new TraceGermPage();
    const URL = '/#!/alerts';

    beforeEach(function() {
        return browser.get(URL);
    });


    describe('Alerts page: ', function() {

        it('should have alerts table', function () {
            expect(traceGermPage.alertsTable.isPresent()).toBe(true);
        });

        it('should have username header', function () {
            expect(traceGermPage.usernameHeader.isPresent()).toBe(true);
        });

        it('should have alert time header', function () {
            expect(traceGermPage.alertTimeHeader.isPresent()).toBe(true);
        });

        it('should have accepted header', function () {
            expect(traceGermPage.acceptedHeader.isPresent()).toBe(true);
        });

        it('should have remove header', function () {
            expect(traceGermPage.removeHeader.isPresent()).toBe(true);
        });

        it('should have accept button', function () {
            expect(traceGermPage.acceptButton.isPresent()).toBe(true);
        });

        it('should have remove button', function () {
            expect(traceGermPage.removeButton.isPresent()).toBe(true);
        });


        it('should not have about title', function () {
            expect(traceGermPage.aboutTitle.isPresent()).toBe(false);
        });

        it('should not have about description', function () {
            expect(traceGermPage.aboutDescription.isPresent()).toBe(false);
        });


    });

});