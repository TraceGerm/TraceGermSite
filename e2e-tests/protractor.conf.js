var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: '../test-results/screenshots',
    filename: 'test-results.html',
    userCss: 'jasmine-html-report-style.css',
    reportOnlyFailedSpecs: false,
    captureOnlyFailedSpecs: true
});

exports.config = {
    allScriptsTimeout: 11000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:9090',
    rootElement: 'body',

    specs: [
        '**/*.test.js'
    ],

    suites: {
        complete: '**/*.test.js',
    },

    suite: 'complete', //Default test suite

    multiCapabilities: [{
        //browserName: 'chrome',
        browserName: 'chrome',
        maxInstances: 1
    }],

    framework: 'jasmine2',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    beforeLaunch: function () {
        return new Promise(function (resolve) {
            reporter.beforeLaunch(resolve);
        });
    },

    // Assign the test reporter to each running instance
    // onPrepare: function() {
    //     jasmine.getEnv().addReporter(reporter);
    // },

    // Close the report after all tests finish
    // afterLaunch: function(exitCode) {
    //     return new Promise(function(resolve){
    //         reporter.afterLaunch(resolve.bind(this, exitCode));
    //     });
    // },

    onPrepare: function () {
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: false,
            savePath: '../../../../build/test-results',
            filePrefix: 'xmloutput'
        }));
        jasmine.getEnv().addReporter(reporter);

        browser.driver.manage().window().maximize();
        // browser.driver.get('https://localhost:8080/login.html');
        //
        // browser.driver.findElement(by.id('username')).sendKeys('Jane');
        // browser.driver.findElement(by.id('password')).sendKeys('1234');
        // browser.driver.findElement(by.id('login')).click();
        //
        // // Login takes some time, so wait until it's done.
        // // For the test app's login, we know it's done when it redirects to
        // // index.html.
        // return browser.driver.wait(function() {
        //     return browser.driver.getCurrentUrl().then(function(url) {
        //         return /dashboard/.test(url);
        //     });
        // }, 10000);

    }

};
