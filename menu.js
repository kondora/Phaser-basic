var PWDSN = PWDSN || {};

PWDSN.menu = function(){};
 
PWDSN.menu.prototype = {
    preload: function() {
    },
  create: function() {
    this.game.renderer.renderSession.roundPixels = true;
  	//show the space tile, repeated
    this.background = this.game.stage.backgroundColor = "#ff3251";
 
    //start game text
    var text = "Gupi V 1.0.0 by Auxtopuz\nPress any key to START";
    var style = { font: "30px Arial", fill: "#fff", align: "center" };
    var t = this.game.add.text(this.game.width/2, this.game.height/2 - 20, text, style);
    t.anchor.set(0.5);
  },
  update: function() {
    if(this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).isDown) {
      this.game.state.start('play');
    }
  }
};