define(function (require) {
    function IndexPage(remote) {
        this.remote = remote;
    }

    IndexPage.prototype = {
        constructor: IndexPage,

        login: function(username, password) {
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
            .then(function () {
                return true;
            });
        },
    };
    return IndexPage;
});
