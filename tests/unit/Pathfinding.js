define(function (require) {
    var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');
    var jquery = require('libs/jquery/jquery.min.js');
    var jqueryui = require('libs/jquery-ui/jquery-ui.min.js');
    var howler = require('libs/howler.min.js');
    var Player = require('src/game/game/Player');

    registerSuite({
        name: 'player',

        Player: function() {
            assert.isOk(player.Player(), 'move object is created');
        }


    });
});

