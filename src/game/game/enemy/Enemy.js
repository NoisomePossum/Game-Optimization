/**
 * Caisse du sokoban
 */
define([
	"jquery",
	"src/game/game/enemy/EnemyManager",
	"src/utils/assetsmanager/SpriteManager",
	"src/utils/math/Vector2",
	"src/utils/Config",
	"src/game/game/component/Move"
],
function (
	$,
	EnemyManager,
	SpriteManager,
	Vector2,
	Config,
	Move
) {
	var Enemy = function (x, y, isOnGoal, MapManager, Player) {
		Move.addPositionUpdate(Enemy, Config, MapManager);
		this.Player = Player;
		this.MapManager = MapManager;
		EnemyManager.list.push(this);

		this.modifier = {
			currentCell: [
				[this.MapManager.cell.enemy, this.MapManager.cell.floor],
				[this.MapManager.cell.enemyOnGoal, this.MapManager.cell.goal]
			],
			nextCell: [
				[this.MapManager.cell.floor, this.MapManager.cell.enemy],
				[this.MapManager.cell.goal, this.MapManager.cell.enemyOnGoal]
			]
		}

		this.position = new Vector2(x, y);
		this.id = Math.floor(Math.random() * 10000000);
		this.name = "enemy" + this.id;
		this.translateOffset = new Vector2(0, 0);
		this.xOffset = 0;
		this.yOffset = 0;

		this.idleSprite = SpriteManager.get("enemy").src;
		// if (isOnGoal) this.idleSprite = SpriteManager.get("enemy").src;;

		this.appendEnemy();
	}


	Enemy.prototype.update = function () {
		this.positionUpdate();
		this.fluidMovementUpdate();
	}


	/**
	 * Ajoute la enemy au dom
	 */
	Enemy.prototype.appendEnemy = function () {
		$("#mapContainer").append("<div id='enemy" + this.id + "' class='enemy'></div>");
		$("#enemy" + this.id).css("background-image", "url(" + this.idleSprite + ")")
							 .css("width", 141 * Math.max(Config.mapWidth, Config.mapHeight) / 110)
						 	 .css("height", 87 * Math.max(Config.mapWidth, Config.mapHeight) / 110);

		$("#enemy" + this.id).mouseup((function (position, Player, MapManager) {
			return function () {
				var nextDir = Player.XYToDir(position.x, position.y);
				if (nextDir != false) {
					var moved = Player.move(nextDir);
					if (moved) MapManager.actionIncrement();
				} else {
					Player.move(position.x, position.y);
				}
			}
		})(this.position, this.Player, this.MapManager));

		$('#enemy' + this.id).hide();
		setTimeout((function (id) {
			return function () {
				$('#enemy' + id).fadeIn(400);
			};
		})(this.id), Config.fadeInMin + Math.random() * (Config.fadeInMax - Config.fadeInMin));
	}

	/**
	 * Bouge la caisse dans la direction donné.
	 * @return true si la caisse a bougé sinon false
	 */
	Enemy.prototype.move = function (dir) {
		if (Math.abs(this.translateOffset.x) + Math.abs(this.translateOffset.y) == 0) {
			var map = this.MapManager.currentMap;
			var xOffset = 0;
			var yOffset = 0;

			switch(dir){
				case "right":
					xOffset = -1;
					break;
				case "left":
					xOffset = 1;
					break;
				case "down":
					yOffset = -1;
					break;
				case "up":
					yOffset = 1;
					break;
				default:
					console.error("Mauvaise direction ! Accepté : left, right, up, down. Entré : " + dir)
					break;
			}

			var canMove = false;
			var currentCellId = this.MapManager.getCellId(this.position.x, this.position.y);
			var currentCellValue = this.MapManager.getCellValue(this.position.x, this.position.y);
			var nextCellId = this.MapManager.getCellId(this.position.x + xOffset, this.position.y + yOffset);
			var nextCellValue = this.MapManager.getCellValue(this.position.x + xOffset, this.position.y + yOffset);

			for (var i = 0; i < this.modifier.nextCell.length; i++) {
				if (this.modifier.nextCell[i][0] == nextCellValue) {
					map[nextCellId] = this.modifier.nextCell[i][1]
					canMove = true;
				}
			};

			if (!canMove) return false;

			for (var i = 0; i < this.modifier.currentCell.length; i++) {
				if (this.modifier.currentCell[i][0] == currentCellValue) {
					map[currentCellId] = this.modifier.currentCell[i][1];
				}
			};

			this.idleSprite = SpriteManager.get("enemy").src;
			// if (nextCellValue == this.MapManager.cell.goal) this.idleSprite = SpriteManager.get("enemy").src;
			$("#enemy" + this.id).css("background-image", "url(" + this.idleSprite + ")")
			
			this.position.x += xOffset;
			this.position.y += yOffset;
			this.translateOffset.x = xOffset * Config.mapWidth * -1;
			this.translateOffset.y = yOffset * Config.mapHeight * -1;

			//SoundManager.play("meow" + Math.floor(Math.random() * 15))

			return true;
		}
		return false;
	}


	Enemy.prototype.destroy = function () {
		setTimeout((function (id) {
			return function () {
				$('#enemy' + id).fadeOut(400, function () {
					$('#enemy' + id).remove();
				});
			};
		})(this.id), Config.fadeInMin + Math.random() * (Config.fadeInMax - Config.fadeInMin));
	}


	return Enemy;
});

