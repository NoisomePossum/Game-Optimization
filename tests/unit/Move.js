define(function (require) {
    var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');
    var $ = require('libs/jquery/jquery.min.js');
    var move = require('src/game/game/component/Move');

    registerSuite({
        name: 'move',

        Move: function() {
            assert.isOk(move.Move(), 'move object is created');
        },

        addPositionUpdate: function() {
        }

    });
});

