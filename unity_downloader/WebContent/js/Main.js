window.onload = function() {
	var game = new Phaser.Game(800, 600, Phaser.AUTO);

	// Add the States your game has.
	// game.state.add("Boot", Boot);
	// game.state.add("Menu", Menu);
	// game.state.add("Preload", Preload);
	game.state.add("Level", Level);
	game.state.add("Level_01", Level_01);
	game.state.add("Level_02", Level_02);
	
	game.state.start("Level_01");
};
