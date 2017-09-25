define(function (require) {
    var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');
    var keys = require('intern/dojo/node!leadfoot/keys');

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

            .findById('LevelSelectBtn')
            .click()
            .end()

            .sleep(1000)
            .findById('btnLevel1')
            .click()
            .end()
            .findById('GameStage')
            .then(function (element) {
                assert.isNotNull(element, 'GameStage div should appear with content in it');
            })
            .end()
            ;
        },

        'Level 1 successfully clears': function() {
            return this.remote
            .sleep(1000)
            // .findById('mapContainer')
            .pressKeys(keys.ARROW_RIGHT)
            .sleep(100)
            .pressKeys(keys.ARROW_RIGHT)
            // .pressKeys(keys.ARROW_RIGHT)
            // .pressKeys(keys.ARROW_DOWN)
            // .pressKeys(keys.ARROW_DOWN)
            // .pressKeys(keys.ARROW_UP)
            // .pressKeys(keys.ARROW_UP)
            // .pressKeys(keys.ARROW_RIGHT)
            // .pressKeys(keys.ARROW_RIGHT)
            .end()
            .sleep(1000)
            .findById('hudActionNumberText')
            .getVisibleText()
            .then(function(text){
                assert.strictEqual(text, '0', 
                    'Actions should be 0 when the next map is loaded');
            })
        },

    });
});


