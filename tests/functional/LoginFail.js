define(function (require) {
    var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');

    registerSuite({
        name: 'LoginFail',

        'Player gets error feedback when entering wrong password': function () {
            return this.remote
            .get(require.toUrl('http://localhost/~possum/sokoban/index.html'))
            .setFindTimeout(5000)
            .findById('nameField')
            .click()
            .type('new')
            .end()
            .findById('passField')
            .click()
            .type('puss')
            .end()
            .findByCssSelector('.buttonConnection')
            .click()
            .end()

            .findById('WrongPassword')
            .getVisibleText()
            .then(function (text) {
                assert.include(text, 'Error',
                    'Popup window should give an error if the player enters the wrong password');
            })
            ;
        },


    });
});


