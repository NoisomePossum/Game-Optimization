/**
 * Permet de gerer toutes les caisses du jeu
 */
define([
],
function (
) {
	var EnemyManager = function () {
		this.list = [];
	}


	EnemyManager.prototype.update = function () {
		for (var i = 0; i < this.list.length; i++) {
			this.list[i].update();
		};
	}


	/**
	 * Return la classe d'un Enemy grâce à ses coordonées
	 */
	EnemyManager.prototype.getByXY = function (x, y) {
		for (var i = 0; i < this.list.length; i++) {
			if (this.list[i].position.x == x &&
				this.list[i].position.y == y) {
				return this.list[i];
			}
		};
		return false;
	}


	EnemyManager.prototype.destroyAll = function () {
		for (var i = 0; i < this.list.length; i++) {
			this.list[i].destroy();
		};
		this.list = [];
	}


	return new EnemyManager();
});

