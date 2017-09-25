define(function (require) {
    var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');

    registerSuite({
        name: 'Gameplay',

        'Level 18 loads from level select screen': function () {
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
            .findById('btnLevel18')
            .click()
            .end()
            .sleep(1000)
            .findById('GameStage')
            .then(function (element) {
                assert.isNotNull(element, 'GameStage div should appear with content in it');
            })
            .findById('MenuBtn')
            .click()
            .end()
            ;
        },

        'Level 17 loads from level select screen': function () {
            return this.remote
            .sleep(1000)
            .findById('LevelSelectBtn')
            .click()
            .end()

            .setFindTimeout(5000)
            .findById('btnLevel17')
            .click()
            .end()
            .sleep(1000)
            .findById('GameStage')
            .then(function (element) {
                assert.isNotNull(element, 'GameStage div should appear with content in it');
            })
            .findById('MenuBtn')
            .click()
            .end()
            ;
        },

        'Level 16 loads from level select screen': function () {
            return this.remote
            .sleep(1000)
            .findById('LevelSelectBtn')
            .click()
            .end()

            .setFindTimeout(5000)
            .findById('btnLevel16')
            .click()
            .end()
            .sleep(1000)
            .findById('GameStage')
            .then(function (element) {
                assert.isNotNull(element, 'GameStage div should appear with content in it');
            })
            .findById('MenuBtn')
            .click()
            .end()
            ;
        },

        'Level 15 loads from level select screen': function () {
            return this.remote
            .sleep(1000)
            .findById('LevelSelectBtn')
            .click()
            .end()

            .setFindTimeout(5000)
            .findById('btnLevel15')
            .click()
            .end()
            .sleep(1000)
            .findById('GameStage')
            .then(function (element) {
                assert.isNotNull(element, 'GameStage div should appear with content in it');
            })
            .findById('MenuBtn')
            .click()
            .end()
            ;
        },

        'Level 14 loads from level select screen': function () {
            return this.remote
            .sleep(1000)
            .findById('LevelSelectBtn')
            .click()
            .end()

            .setFindTimeout(5000)
            .findById('btnLevel14')
            .click()
            .end()
            .sleep(1000)
            .findById('GameStage')
            .then(function (element) {
                assert.isNotNull(element, 'GameStage div should appear with content in it');
            })
            .findById('MenuBtn')
            .click()
            .end()
            ;
        },

        'Level 13 loads from level select screen': function () {
            return this.remote
            .sleep(1000)
            .findById('LevelSelectBtn')
            .click()
            .end()

            .setFindTimeout(5000)
            .findById('btnLevel13')
            .click()
            .end()
            .sleep(1000)
            .findById('GameStage')
            .then(function (element) {
                assert.isNotNull(element, 'GameStage div should appear with content in it');
            })
            .findById('MenuBtn')
            .click()
            .end()
            ;
        },

        'Level 12 loads from level select screen': function () {
            return this.remote
            .sleep(1000)
            .findById('LevelSelectBtn')
            .click()
            .end()

            .setFindTimeout(5000)
            .findById('btnLevel12')
            .click()
            .end()
            .sleep(1000)
            .findById('GameStage')
            .then(function (element) {
                assert.isNotNull(element, 'GameStage div should appear with content in it');
            })
            .findById('MenuBtn')
            .click()
            .end()
            ;
        },

        'Level 11 loads from level select screen': function () {
            return this.remote
            .sleep(1000)
            .findById('LevelSelectBtn')
            .click()
            .end()

            .setFindTimeout(5000)
            .findById('btnLevel11')
            .click()
            .end()
            .sleep(1000)
            .findById('GameStage')
            .then(function (element) {
                assert.isNotNull(element, 'GameStage div should appear with content in it');
            })
            .findById('MenuBtn')
            .click()
            .end()
            ;
        },

        'Level 10 loads from level select screen': function () {
            return this.remote
            .sleep(1000)
            .findById('LevelSelectBtn')
            .click()
            .end()

            .setFindTimeout(5000)
            .findById('btnLevel10')
            .click()
            .end()
            .sleep(1000)
            .findById('GameStage')
            .then(function (element) {
                assert.isNotNull(element, 'GameStage div should appear with content in it');
            })
            .findById('MenuBtn')
            .click()
            .end()
            ;
        },

        'Level 9 loads from level select screen': function () {
            return this.remote
            .sleep(1000)
            .findById('LevelSelectBtn')
            .click()
            .end()

            .setFindTimeout(5000)
            .findById('btnLevel9')
            .click()
            .end()
            .sleep(1000)
            .findById('GameStage')
            .then(function (element) {
                assert.isNotNull(element, 'GameStage div should appear with content in it');
            })
            .findById('MenuBtn')
            .click()
            .end()
            ;
        },

        'Level 8 loads from level select screen': function () {
            return this.remote
            .sleep(1000)
            .findById('LevelSelectBtn')
            .click()
            .end()

            .setFindTimeout(5000)
            .findById('btnLevel8')
            .click()
            .end()
            .sleep(1000)
            .findById('GameStage')
            .then(function (element) {
                assert.isNotNull(element, 'GameStage div should appear with content in it');
            })
            .findById('MenuBtn')
            .click()
            .end()
            ;
        },

        'Level 7 loads from level select screen': function () {
            return this.remote
            .sleep(1000)
            .findById('LevelSelectBtn')
            .click()
            .end()

            .setFindTimeout(5000)
            .findById('btnLevel7')
            .click()
            .end()
            .sleep(1000)
            .findById('GameStage')
            .then(function (element) {
                assert.isNotNull(element, 'GameStage div should appear with content in it');
            })
            .findById('MenuBtn')
            .click()
            .end()
            ;
        },
        'Level 6 loads from level select screen': function () {
            return this.remote
            .sleep(1000)
            .findById('LevelSelectBtn')
            .click()
            .end()

            .setFindTimeout(5000)
            .findById('btnLevel6')
            .click()
            .end()
            .sleep(1000)
            .findById('GameStage')
            .then(function (element) {
                assert.isNotNull(element, 'GameStage div should appear with content in it');
            })
            .findById('MenuBtn')
            .click()
            .end()
            ;
        },

        'Level 5 loads from level select screen': function () {
            return this.remote
            .sleep(1000)
            .findById('LevelSelectBtn')
            .click()
            .end()

            .setFindTimeout(5000)
            .findById('btnLevel5')
            .click()
            .end()
            .sleep(1000)
            .findById('GameStage')
            .then(function (element) {
                assert.isNotNull(element, 'GameStage div should appear with content in it');
            })
            .findById('MenuBtn')
            .click()
            .end()
            ;
        },

        'Level 4 loads from level select screen': function () {
            return this.remote
            .sleep(1000)
            .findById('LevelSelectBtn')
            .click()
            .end()

            .setFindTimeout(5000)
            .findById('btnLevel4')
            .click()
            .end()
            .sleep(1000)
            .findById('GameStage')
            .then(function (element) {
                assert.isNotNull(element, 'GameStage div should appear with content in it');
            })
            .findById('MenuBtn')
            .click()
            .end()
            ;
        },

        'Level 3 loads from level select screen': function () {
            return this.remote
            .sleep(1000)
            .findById('LevelSelectBtn')
            .click()
            .end()

            .setFindTimeout(5000)
            .findById('btnLevel3')
            .click()
            .end()
            .sleep(1000)
            .findById('GameStage')
            .then(function (element) {
                assert.isNotNull(element, 'GameStage div should appear with content in it');
            })
            .findById('MenuBtn')
            .click()
            .end()
            ;
        },

        'Level 2 loads from level select screen': function () {
            return this.remote
            .sleep(1000)
            .findById('LevelSelectBtn')
            .click()
            .end()

            .setFindTimeout(5000)
            .findById('btnLevel2')
            .click()
            .end()
            .sleep(1000)
            .findById('GameStage')
            .then(function (element) {
                assert.isNotNull(element, 'GameStage div should appear with content in it');
            })
            .findById('MenuBtn')
            .click()
            .end()
            ;
        },

        'Level 1 loads from level select screen': function () {
            return this.remote
            .sleep(1000)
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
        }
    });
});


