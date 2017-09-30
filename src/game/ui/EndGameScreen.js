/**
 * Class EndGameScreen
 */
define([
	"jquery",
	"jquery-ui",
	"src/utils/assetsmanager/SpriteManager",
	"src/utils/assetsmanager/SoundManager",
	"src/utils/localization/txt",
	"src/utils/Config"
],
function (
	$,
	ui,
	SpriteManager,
	SoundManager,
	txt,
	Config
) {
	var EndGameScreen = function () {

	}


	/**
	 * Affiche le contenu dans popUp
	 */
	EndGameScreen.prototype.init = function (UIManager) {
		$("#screenContainer").append("<div id='EndGameScreen' class='popUp'></div>");
		$("#blackScreen").show();

		$("#screenContainer #EndGameScreen").css("background-image", "url(" + SpriteManager.get("popUp").src + ")")
									  .css("width", 786.8)
									  .css("height", 444,5)
									  .css( "left", "170" )
									  .css( "top", "160" );

		$("#EndGameScreen").append("<div class='buttonClose'>" + txt.get("LABEL_POPUP_CLOSEBTN") + "</div>");
		$("#EndGameScreen .buttonClose").css("background-image", "url(" + SpriteManager.get("buttonLoginStatic").src + ")");

		// Hover
		$( "#EndGameScreen .buttonClose").hover(function() {
			$( this ).css("background-image", "url(" + SpriteManager.get("buttonLoginSurvol").src + ")");
			$("#EndGameScreen .buttonClose").css("background-repeat", "no-repeat");
			SoundManager.play("buttonHover");
		}, function() {
			$( this ).css("background-image", "url(" + SpriteManager.get("buttonLoginStatic").src + ")");
		});

		// Active
		$( "#EndGameScreen .buttonClose").mousedown(function() {
			$("#EndGameScreen .buttonClose").css("background-image", "url(" + SpriteManager.get("buttonLoginPress").src + ")");
			$("#EndGameScreen .buttonClose").css("padding-top", 12);
		});

		$("#EndGameScreen .buttonClose").mouseup(function() {
			$("#EndGameScreen .buttonClose").css("background-image", "url(" + SpriteManager.get("buttonLoginStatic").src + ")");
			$("#EndGameScreen .buttonClose").css("padding-top", 8);
			$("#blackScreen").hide();
			SoundManager.play("meow14");
			UIManager.closeScreen("EndGameScreen", true);
		});

		

		$("#screenContainer #EndGameScreen").append("<div class='endGameText title'>You win!<p>You've completed all the levels.</p><p>Stay tuned for future updates and additional levels!</p></div>");

	}

	
	return new EndGameScreen();
});

