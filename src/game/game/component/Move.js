/**
 * Function to move the player  
 */
define([
],
function (
) {
	var Move = function () {

	}


	/**
	 * Updates the position of the object
	 * @this Objet whose position should be updated
	 * @Config Ref to Config
	 * @MapManager Ref to MapManager
	 */
	Move.prototype.addPositionUpdate = function (Object, Config, MapManager) {

		/**
		 * Graphically updates the player's position based on where it is currently
		 */
		Object.prototype.positionUpdate = function () {
			// Changes the player sprite even if the player doesn't change position
			if (Math.abs(this.translateOffset.x) + Math.abs(this.translateOffset.y) == 0) {
				$("#" + this.name).css("background-image", "url(" + this.idleSprite + ")");
			}

			// Updates position according to vector position
			if (MapManager.currentMap.length > 0) {
				$("#" + this.name).fadeIn( Config.fadeInMin + Math.random() * (Config.fadeInMax - Config.fadeInMin) );
				$("#" + this.name).css("left", this.xOffset + this.translateOffset.x + Config.mapWidth * this.position.x)
								  .css("top", this.yOffset + this.translateOffset.y + Config.mapHeight * this.position.y);
			} else {
				$("#" + this.name).fadeOut( Config.fadeInMin + Math.random() * (Config.fadeInMax - Config.fadeInMin) );
			}
		}

		/**
		 * Moves the player from one square to another while keeping fluid animation
		 */
		Object.prototype.fluidMovementUpdate = function () {
			// Update translation for fluid movement
			if (Math.abs(this.translateOffset.x) > Config.translationSpeed + 1) {
				this.translateOffset.x += Config.translationSpeed * this.translateOffset.x / Math.abs(this.translateOffset.x) * -1;
			} else {
				this.translateOffset.x = 0;
			}
			if (Math.abs(this.translateOffset.y) > Config.translationSpeed + 1) {
				this.translateOffset.y += Config.translationSpeed * this.translateOffset.y / Math.abs(this.translateOffset.y) * -1;
			} else {
				this.translateOffset.y = 0;
			}
		}
		
	}

	return new Move();
});
