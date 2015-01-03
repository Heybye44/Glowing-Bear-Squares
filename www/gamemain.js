console.log("Game starting");

var g = new Phaser.Game(480, 800, Phaser.AUTO, '', {preload: preload, create: create, update: update});
var score = 0;
var badtile;
var goodtile;
var scoretxt;
var endmsg;
var dead;
var plus;

function preload() {
    g.load.image("tile1", "images/tile1.png");
    g.load.image("tile2", "images/tile2.png");
    g.load.image("bkgr", "images/background.jpg")//This pic is CC-3.0
    console.info("Preload Finished");
}

function create() {
    g.add.sprite(0, 0, "bkgr");
    
    badtile = g.add.sprite(0 , 0, "tile2");
    badtile.inputEnabled = true;
    g.add.badtile;
    
    goodtile = g.add.sprite(0, 0, "tile1");
    goodtile.inputEnabled = true;
    
    scoretxt = g.add.text(0, 770, "Score: 0", {fontSize: '32px', fill: '#FFFFFF'});
    console.info("Create Finished");
}

function update() {
    badtile.events.onInputDown.add(listener(), this);
    goodtile.events.onInputDown.add(listener(), this);
    
    scoretxt.text = "Score: " + score;
}
function listener() {
    dead = function() {
        badtile.kill();
        goodtile.kill();
        endmsg = g.add.text(g.world.centerX, g.world.centerY, "You lost. Your score is: " + score, {fontSize: '64px', fill: '#FF0000'});
        
    }
    
    plus = function() {
        score++;
    }
}