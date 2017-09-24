define(function (require) {
    var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');

    registerSuite({
        name: 'Gameplay',

        'Level 1 loads from level select screen': function () {
            return this.remote
            .get(require.toUrl('http://localhost/~possum/sokoban/index.html'))
            .setFindTimeout(5000)
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

            .findByCssSelector('.buttonClose')
            .click()
            .waitForDeletedById('GoodPassword')
            .end()

            .setFindTimeout(5000)
            .findById('LevelSelectBtn')
            .click()
            .end()

            .setFindTimeout(5000)
            .findById('btnLevel1')
            // .findByCssSelector('.ui-effects-wrapper')
            .click()
            .end()
            .setFindTimeout(5000)
            .findById('GameStage')
            // .getVisibleText()
            .then(function (element) {
                console.log(element);
                assert.isNotNull(element, 'GameStage div should appear with content in it');
            })
            .findById('MenuBtn')
            .click()
            .end()
            ;
        },


    });
});


