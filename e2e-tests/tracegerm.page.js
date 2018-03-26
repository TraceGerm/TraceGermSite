var TraceGermPage = function () {
    this.applicationTitleButton = element(by.name('application-title'));
    this.homeMenuItem = element(by.name('home'));
    this.aboutMenuItem = element(by.name('about'));
    this.alertsTable = element(by.name('alerts-table'));
    this.usernameHeader = element(by.name('username-header'));
    this.alertTimeHeader = element(by.name('alert-time-header'));
    this.acceptedHeader = element(by.name('accepted-header'));
    this.removeHeader = element(by.name('remove-header'));
    this.aboutTitle = element(by.name('about-title'));
    this.aboutDescription = element(by.name('about-description'));
    this.acceptButton = element(by.name('accept-button'));
    this.removeButton = element(by.name('remove-button'));
};

module.exports = TraceGermPage;