define(function (require) {
    var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');
    var account = require('src/game/server/Account');

    registerSuite({
        name: 'account',

        squareSomething: function() {
            assert.strictEqual(account.squareSomething(2), 4,
                'account.squareSomething should return the square root of the number passed as argument');
        }
    });
});
