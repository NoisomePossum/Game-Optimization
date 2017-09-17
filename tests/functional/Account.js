// const { suite, test } = intern.getInterface('tdd');
// const { assert } = intern.getPlugin('chai');

// suite('index', () => {
//     before(({remote}) => {
//         return remote
//         .get('_dist/src/index.html')
//         .setFindTimeout(5000)
//         .findDisplayedByCssSelector('body.loaded')
//         ;
//     });

//     test('login', ({remote}) => {
//         return remote
//         .findById('nameField')
//         .click()
//         .type('new')
//         .end()

//         .findById('passField')
//         .click()
//         .type('pass')
//         .end()

//         .findByCssSelector('#login input[type=submit]')
//         .click()
//         .end()

//         //pass to Account.js file and get variable returned by connect function
//         t
//         ;
//     });
// });

define(function (require) {
    var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');

    registerSuite({
        name: 'index',

        'login': function () {
            return this.remote
            .get(require.toUrl('index.html'))
            .setFindTimeout(5000)
            .findByCssSelector('body.loaded')
            .findById('nameField')
            .click()
            .type('new')
            .end()
            .findById('passField')
            .click()
            .type('pass')
            .end()
            .findByCssSelector('#login input[type=submit]')
            .click()
            .end()
            var newScreen = .findById('GoodPassword')
            .then(function (newScreen) {
                assert.strictEqual(newScreen, 'GoodPassword',
                    'Popup window should have id "GoodPassword" if the user entered the correct username and password');
            });
        }
    });
});

