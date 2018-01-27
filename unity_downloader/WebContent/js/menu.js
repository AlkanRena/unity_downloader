var game;
var menuGroup;

window.onload = function() {	      
	game = new Phaser.Game(800, 600);
     game.state.add("Boot", boot);
     game.state.add("Preload", preload);
     game.state.add("GameTitle", gameTitle);
     game.state.add("Level_00", Level);
     game.state.add("Level_01", Level_01);
     //game.state.add("Level_02", Level_02);
     game.state.add("Highscores", highscores);
	game.state.start("Boot");
}

////////////////////////////////////////////////////////////////////////////////

var boot = function(game){};

boot.prototype = {
     preload: function(){
          game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.setScreenSize = true;
          game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
          game.stage.backgroundColor = "#0047D2";
     },
  	create: function(){
		game.state.start("Preload");
	}
}

////////////////////////////////////////////////////////////////////////////////

var preload = function(game){};

preload.prototype = {
	preload: function(){
          game.load.image("gametitle", "assets/menu/title.png");
          game.load.image("playbutton", "assets/menu/playbutton.png");
          game.load.image("menubutton", "assets/menu/menu.png");
         // game.load.image("resetgame", "assets/menu/reset.png");
          game.load.image("highscores", "assets/menu/highscores.png");
          game.load.image("thankyou", "assets/menu/thanks.png");
          game.load.image("1level", "assets/menu/1level.png");
          game.load.image("2level", "assets/menu/2level.png");
          game.load.image("3level", "assets/menu/3level.png");
	},
  	create: function(){
		game.state.start("GameTitle");
	}
}

////////////////////////////////////////////////////////////////////////////////

var gameTitle = function(game){}

gameTitle.prototype = {
     create: function(){
          var title = game.add.sprite(game.width / 2, 60, "gametitle");
          title.anchor.set(0.5);           
          var playButton = game.add.button(game.width / 2, game.height / 2 , "playbutton", play);
          playButton.anchor.set(0.5);
          menuGroup = game.add.group();
          var menuButton = game.add.button(game.width / 2, game.height - 30, "menubutton", toggleMenu);
          menuButton.anchor.set(0.5);
          menuGroup.add(menuButton);
          //var resetGame = game.add.button(game.width / 2, game.height + 50, "resetgame", function(){});
         // resetGame.anchor.set(0.5);
         // menuGroup.add(resetGame);
          var highScores = game.add.button(game.width / 2, game.height + 30, "highscores", highscores);
          highScores.anchor.set(0.5);
          menuGroup.add(highScores);
          var thankYou = game.add.button(game.width / 2, game.height + 150, "thankyou", function(){});
          thankYou.anchor.set(0.5);
          menuGroup.add(thankYou);
          var one_level = game.add.button(game.width / 2 - 100, game.height + 50, "1level", play0);
          thankYou.anchor.set(0.5);
          menuGroup.add(one_level);
          var two_level = game.add.button(game.width / 2, game.height + 50, "2level", play1);
          thankYou.anchor.set(0.5);
          menuGroup.add(two_level);;
          var three_level = game.add.button(game.width / 2 - 50, game.height + 90, "3level", play2);
          thankYou.anchor.set(0.5);
          menuGroup.add(three_level);
     }
}

function toggleMenu(){
     if(menuGroup.y == 0){
          var menuTween = game.add.tween(menuGroup).to({
               y: -180     
          }, 500, Phaser.Easing.Bounce.Out, true);
     }
     if(menuGroup.y == -180){
          var menuTween = game.add.tween(menuGroup).to({
               y: 0    
          }, 500, Phaser.Easing.Bounce.Out, true);     
     }
}

function play(){
	game.state.start('Level_01');	
}
function highscores(){
	game.state.start('highscores');
}
function play0(){
	game.state.start('Level_00');
}
function play1(){
	game.state.start('Level_01');
}
function play2(){
	game.state.start('Level_02');
}
