define(function (require) {
    var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');

    registerSuite({
        name: 'index',

        'Login': function () {
            return this.remote
            .get(require.toUrl('http://localhost/~possum/sokoban/index.html'))
            .setFindTimeout(15000)

            .findById('nameField')
            .click()
            .type('new')
            .end()
            .findById('passField')
            .click()
            .type('pass')
            .end()
            .findByCssSelector('.buttonConnection')
            .click()
            .end()
            .findById('GoodPassword')
            .getVisibleText()
            .then(function (text) {
                assert.include(text, 'Welcome new !',
                    'Popup window should have id "GoodPassword" if the user entered the correct username and password');
            })
            ;
        },

        // 'About': function() {
        //     return this.remote
        //     .findByCssSelector('.buttonClose')
        //     .click()
        //     .then(function() {
        //         assert.isNull(document.getElementById('GoodPassword'), 'GoodPassword popup should now be gone');
        //     })

            // .setFindTimeout(5000)
            // .findById('menuInfo')
            // .getVisibleText()
            // .then(function (text) {
            //     assert.include(text, 'Logged as new',
            //         'Main menu should be displayed with user logged in as "new"');
            // })
            // ;
        // }
    });
});

