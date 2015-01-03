console.log("Game starting");

var g = new Phaser.Game(480, 800, Phaser.AUTO, '', {preload: preload, create: create, update: update});

function preload() {
    g.load.image("tile1", "images/tile1.png");
    g.load.image("tile2", "images/tile2.png");
}

function create() {
    for (var x = 0; x <= 6;x++){
        
        
        g.add.sprite(x + 0.125, 0, "tile2");
    };
}

function update() {
    
}

