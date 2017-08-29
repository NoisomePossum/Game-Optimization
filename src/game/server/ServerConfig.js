/*
 * Server configuration
 */
define([
	"src/utils/Config"
],
function (
	Config
) {
	var ServerConfig = function () {
        // this.localhost = 'https://fbgame.isartdigital.com/sokoban/sokoban26/src/game/server/php/';
		this.localhost = 'http://localhost/~possum/sokoban/';
		this.webhost = 'http://sokonyan.delfisakura.com/src/game/server/php/';
		// this.webhost = 'http://localhost/';
		this.host = Config.local ? this.localhost : this.webhost;
	}


	return new ServerConfig();
});
