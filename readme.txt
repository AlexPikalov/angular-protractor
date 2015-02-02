Project bootstraping

1. Install Java, NodeJS.
2. Go to project folder in terminal.
3. Install bower (UI package manager) - run `$ npm install bower -g`
4. Install dev deps - run `$ npm install`
5. Install Grunt cli - run '$ npm install grunt-cli -g'
6. Install UI deps - run `$ bower install`
7. Update webdriver - run `$ node_modules/protractor/bin/webdriver-manager update`
8. Start Selenium (terminal #1) - run `$ node_modules/protractor/bin/webdriver-manager start`
9. Run application server (terminal #2) - run `grunt connect:test-server`
10. Run tests (terminal #3) - run `$ node_modules/protractor/bin/protractor ./test/protractor.config.js`