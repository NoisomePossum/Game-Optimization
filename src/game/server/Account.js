/**
 * Contains all parameters related to accounts and AJAX requests
 */
define([
	"src/utils/Config",
	"src/game/server/ServerConfig"
],
function (
	Config,
	ServerConfig
) {
	var Account = function () {
		this.name = "";
		this.password = "";
		this.progress = {};
		this.highScore = 0;
		this.playerScore = 0;
	}


	Account.prototype.init = function (UIManager) {
		this.UIManager = UIManager;
	}


	/*
	 * Allows for connecting to/creation of accounts
	 * @name Account name
	 * @password Account password
	 * Return "created" - Account created
	 *		  "connected" - Connection was successful
	 *		  "wrongpassword" - Incorrect password or account already exists
	 */
	Account.prototype.connect = function (name, password) {
		this.name = name;
		this.password = password;

		$.post(ServerConfig.host + "src/game/server/php/request.php", {
			name: this.name,
			password: this.password,
			isRequest: false
		}, function (data) {
			var screenList = {
				created: "AccountCreated",
				connected: "GoodPassword",
				wrongpassword: "WrongPassword"
			}
			
			data = data.replace(/ /g,"");
			data = data.replace(/\n/g,"");

            var nextScreen;
            if(data.includes("connected")){
                nextScreen = "GoodPassword";
            };
            if (data.includes("created")) {
                nextScreen = "AccountCreated";
            };
            if (data.includes("wrongpassword")) {
                nextScreen = "WrongPassword";
            };

			this.UIManager.addScreen(nextScreen, true);
			this.refreshProgress();
			this.refreshScore();
		}.bind(this));
	}


	/**
	 * Updates player progression (Level unlocked, score per level)
	 */
	Account.prototype.refreshProgress = function () {
		var result;
		$.post(ServerConfig.host + "src/game/server/php/request.php", {
			name: this.name,
			password: this.password,
			request: "getProgress",
			isRequest: true
		}, function (data) {
			data = JSON.parse(data);
			if (!data) data = [];

			data.push({
				score: 0
			});

			this.progress = {
				level: []
			}

			var unlocked;
			var score;
			for (var i = 0; i < Config.totalLevel; i++) {
				if (data.length <= i) {
					unlocked = false;
					score = 0;
				} else {
					unlocked = true;
					score = data[i].score;
				}

				this.progress.level.push({
					unlocked: unlocked,
					score: score,
				})
			};
		}.bind(this));
	}


	/*
	 * Adds a score to the database
	 * @level Level corresponding to the score
	 * @score Score to be added
	 */
	Account.prototype.addScore = function (level, score) {
		$.post(ServerConfig.host + "src/game/server/php/request.php", {
			name: this.name,
			password: this.password,
            request: "sendScore",
            level: level,
            score: score,
			isRequest: true
		}, function (data) {
			this.refreshProgress();
			this.refreshScore();
		}.bind(this));
	}


	/*
	 * Fetches and returns the player's total score
	 */
	Account.prototype.getScore = function () {
		var result;
		$.post(ServerConfig.host + "src/game/server/php/request.php", {
			name: this.name,
			password: this.password,
			request: "getBestScore",
			isRequest: true
		}, function (data) {
			data = JSON.parse(data);
			this.playerScore = data;
		}.bind(this));
	}


	/*
	 * Fetches a list of the top 10 players
	 * Return the list as an object
	 */
	Account.prototype.getBestScore = function () {
		var result;
		$.post(ServerConfig.host + "src/game/server/php/request.php", {
			name: this.name,
			password: this.password,
			request: "getBestScore",
			isRequest: true
		}, function (data) {
			data = JSON.parse(data);
			this.highScore = data;
		}.bind(this));
	}


	/**
	 * Updates the highScore and playerScore variables
	 */
	Account.prototype.refreshScore = function () {
		this.getBestScore();
		this.getScore();
	}

	return new Account();
});
