
var { Given, When, Then} = require('@cucumber/cucumber')

Belly = require('../../src/belly');

Given('I have {int} cukes in my belly', function (cukes) {
  belly = new Belly();
  belly.eat(cukes);
});
