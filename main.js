var PWDSN = PWDSN || {};
 
PWDSN.game = new Phaser.Game(544, 480, Phaser.AUTO, 'game');

//uncomment these as we create them through the tutorial
//PWDSN.game.state.add('Preload', PWDSN.Preload);
PWDSN.game.state.add('menu', PWDSN.menu);
PWDSN.game.state.add('play', PWDSN.play);
PWDSN.game.state.add('over', PWDSN.over);
 
PWDSN.game.state.start('menu');