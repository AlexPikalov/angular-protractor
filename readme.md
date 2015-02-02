Demo AgularJS application with Protractor e2e tests.

## Prerequisites

To bootstrap this project I need to have installed [Java](https://java.com/en/download/) to run Selenium,
[NodeJS](http://nodejs.org/download/) and NPM to manage development dependencies.

## Install NPM and UI dependencies

When NodeJS and NPM are installed, then install globally Grunt CLI

```
$ npm install grunt-cli -g

```

and Bower.IO

```
$ npm install bower -g

```

Then install others development tools `$ npm install` and UI ones `$ bower install`.

## Update webdriver, start Selenium and run tests.

When all dependencies are installed, then update webdriver

```
$ node_modules/protractor/bin/webdriver-manager update
```
and start it

```
$ node_modules/protractor/bin/webdriver-manager start`
```
To run tests you need to start test web server where the testsed application serves.

```
$ grunt connect:test-server
```

After that just run your test suite

```
$ node_modules/protractor/bin/protractor ./test/protractor.config.js
```