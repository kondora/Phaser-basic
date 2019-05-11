var PWDSN = PWDSN || {};

PWDSN.play = function(){
    this.player;
    this.playerBounce;
    this.e;
    this.counter;
};
 
PWDSN.play.prototype = {
// We define the 3 default Phaser functions
preload: function() {
    this.game.load.image('player','assets/player.png');
},
create: function() {
    this.counter = 0;
    this.game.stage.backgroundColor = '#333';

    this.showScore = this.add.text(this.game.world.centerX, this.world.centerY, '0', { fontSize: '300px', fill: '#ffffff' });
    this.showScore.alpha = 0.2;
    this.showScore.anchor.set(0.5);

    //we know there is just one result
    this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');
    this.player.inputEnabled = true;

    this.player.anchor.setTo(0.5);
    this.player.events.onInputDown.add(this.press, this);
    this.player.events.onInputUp.add(this.release, this);

},
update: function() {
    if(this.counter >= 20) {
        this.game.world.removeAll();
        this.add.text(this.game.world.centerX, this.world.centerY, 'Gameover\nYour\'s score is '+this.counter+'\nPress SPACEBAR to restart' , { font: "30px Arial", fill: '#ffffff'}).anchor.setTo(0.5);
        if(this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).isDown) {
            this.game.state.start('menu');
        }
    }
},
press: function () {
    this.game.stage.backgroundColor = "#ff3251";

    this.playerBounce = this.game.add.tween(this.player.scale)
    this.playerBounce.to( { x: 2, y: 2 }, 100, Phaser.Easing.Linear.None);
    this.playerBounce.onComplete.add(this.resetBounce, this);
    this.playerBounce.start();
},
release: function () {
    this.counter++;
    this.showScore.text = this.counter;
    this.game.stage.backgroundColor = "#333";
},
resetBounce: function () {
    this.e = this.game.add.tween(this.player.scale);
    this.e.to( { x: 1, y: 1 }, 100, Phaser.Easing.Linear.None);
    this.e.start();
}
};