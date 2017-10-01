define([
	"src/utils/Config"
],
function (
	Config
) {
	/**
	 * Game configuration
	 */
	var Config = function () {
		/**
		 * Information about the game
		 */
		this.version = "1.0.0";
		this.local = true; // Determines if requests are sent locally or to a web server
		this.language = "en";
		this.availableLanguage = [
			"de",
			"en",
			"es",
			"fr",
			"it",
			"pl"
		];

		// var localhost = 'http://localhost/sokoban/localization/';
		// var localhost = 'https://fbgame.isartdigital.com/sokoban/sokoban26/bin/localization/';
		var localhost = 'http://localhost/~possum/sokoban/';
		var webhost = 'http://sokonyan.delfisakura.com/bin/localization/';
		// this.xliffPath = this.local ? localhost : webhost; // Chemin vers les fichiers de langues xliff
		this.xliffPath = 'http://localhost/~possum/sokoban/bin/localization/'; // Chemin vers les fichiers de langues xliff

		/**
		 * Screen configuration
		 */
		this.fullScreen = false;
		this.ratio = 16 / 9;
		this.WINDOW_WIDTH = 1136; // If fullScreen = false
		this.WINDOW_HEIGHT = 640; // *
		this.SAFE_ZONE_WIDTH = 2048;
		this.SAFE_ZONE_HEIGHT = 1366;

		/*
		 * Debug tools
		 */
		this.debug = false; // Activates/Deactivates the console log
		this.guiDebug = false; // Activates/Deactivates the debug gui
		this.fps = false; // Activates/Deactivates the fps counter
		this.ms = false; // Activates/Deactivates the ms per frame counter
		this.showHitbox = false; // Activates/Deactivates hitbox display
		this.showPivot = false; // Activates/Deactivates pivot point display


		/**
		 * Game
		 */

		// Total number of levels
		this.totalLevel = 18;

		// Map size
		this.mapSizeX = 11;
		this.mapSizeY = 11;
		this.mapWidth = 61;
		this.mapHeight = 61;

		// Map loading effect
		this.fadeInMin = 0;
		this.fadeInMax = 400;

		// UI Manager
		this.changeScreenFadeDelay = 500; // Transition time between 2 screens

		// Speed of movement from one square to another
		this.translationSpeed = 15;
	}


	return new Config();
});
