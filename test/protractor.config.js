exports.config = {
	specs: [ '**/*.spec.js' ],
	chromeOnly: true,
	chromeDriver: '../node_modules/protractor/selenium/chromedriver',
	seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
	// application server
	baseUrl: 'http://127.0.0.1:9000/src/'
};