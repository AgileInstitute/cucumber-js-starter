
var { Given, When, Then} = require('@cucumber/cucumber')

Belly = require('../../src/belly');

Given('I have {int} cukes in my belly', function (cukes) {
  belly = new Belly();
  belly.eat(cukes);
});

When('I wait {int} hour', function (hours) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('my belly should growl', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
