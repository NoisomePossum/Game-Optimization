define(function (require) {
    var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');

    registerSuite({
        name: 'Main Menu',

        'Player can login': function () {
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
            .findById('GoodPassword')
            .getVisibleText()
            .then(function (text) {
                assert.include(text, 'Welcome new !',
                    'Popup window should have id "GoodPassword" if the user entered the correct username and password');
            })
            .findByCssSelector('.buttonClose')
            .click()
            .waitForDeletedById('GoodPassword')
            .end()
            ;
        },


        'About menu opens': function() {
            return this.remote

            .setFindTimeout(5000)
            .findById('AboutBtn')
            .click()
            .end()
            .findById('About')
            .getVisibleText()
            .then(function(text){
                assert.include(text, 'About SokoNyan',
                    'About screen should popup when the user clicks on "About"');
            })
            .findByCssSelector('.buttonClose')
            .click()
            .waitForDeletedById('About')
            .end()
            ;
        },

        'Help menu opens': function() {
            return this.remote

            .setFindTimeout(5000)
            .findById('HelpBtn')
            .click()
            .end()
            .findById('Help')
            .getVisibleText()
            .then(function(text){
                assert.include(text, 'Basic rules',
                    'Help screen should popup when the user clicks on "Help"');
            })
            .findById('helpButtonClose')
            .click()
            .waitForDeletedById('Help')
            .end()
            ;
        },

        'Options menu opens': function() {
            return this.remote

            .setFindTimeout(5000)
            .findById('OptionsBtn')
            .click()
            .end()
            .findById('Options')
            .getVisibleText()
            .then(function(text){
                assert.include(text, 'Options',
                    'Options screen should popup when the user clicks on "Options"');
            })
            ;
        },

        'French language option loads properly': function() {
                return this.remote

                .setFindTimeout(5000)
                .findById('frenchFlag')
                .click()
                .end()
                .findByCssSelector('.buttonClose')
                .getVisibleText()
                .then(function(text){
                    assert.strictEqual(text, 'Fermer',
                        'Language should change to French when French flag is clicked');
                })
                ;
        },
        'German language option loads properly': function() {
                return this.remote

                .setFindTimeout(5000)
                .findById('germanFlag')
                .click()
                .end()
                .findByCssSelector('.buttonClose')
                .getVisibleText()
                .then(function(text){
                    assert.strictEqual(text, 'Zu SchlieBen',
                        'Language should change to German when German flag is clicked');
                })
                ;
        },
        'Spanish language option loads properly': function() {
                return this.remote

                .setFindTimeout(5000)
                .findById('spanishFlag')
                .click()
                .end()
                .findByCssSelector('.buttonClose')
                .getVisibleText()
                .then(function(text){
                    assert.strictEqual(text, 'Cerca',
                        'Language should change to Spanish when Spanish flag is clicked');
                })
                ;
        },
        'Italian language option loads properly': function() {
                return this.remote

                .setFindTimeout(5000)
                .findById('italianFlag')
                .click()
                .end()
                .findByCssSelector('.buttonClose')
                .getVisibleText()
                .then(function(text){
                    assert.strictEqual(text, 'Vicino',
                        'Language should change to Italian when Italian flag is clicked');
                })
                ;
        },
        'Polish language option loads properly': function() {
                return this.remote

                .setFindTimeout(5000)
                .findById('polandFlag')
                .click()
                .end()
                .findByCssSelector('.buttonClose')
                .getVisibleText()
                .then(function(text){
                    assert.strictEqual(text, 'Blisko',
                        'Language should change to Polish when Polish flag is clicked');
                })
                ;
        },
        'English language option loads properly': function() {
                return this.remote

                .setFindTimeout(5000)
                .findById('englishFlag')
                .click()
                .end()
                .findByCssSelector('.buttonClose')
                .getVisibleText()
                .then(function(text){
                    assert.strictEqual(text, 'Close',
                        'Language should change to English when English flag is clicked');
                })
                ;
        },

        'Highscore menu opens': function() {
            return this.remote
            .findByCssSelector('.buttonClose')
            .click()
            .waitForDeletedById('Options')
            .end()

            .setFindTimeout(5000)
            .findById('HighScoreBtn')
            .click()
            .end()
            .findById('HighScore')
            .getVisibleText()
            .then(function(text){
                assert.include(text, 'HIGH SCORE',
                    'Highscore screen should popup when the user clicks on "Highscore"');
            })
            .findByCssSelector('.buttonClose')
            .click()
            .waitForDeletedById('Highscore')
            .end()
            ;
        }
    });
});

