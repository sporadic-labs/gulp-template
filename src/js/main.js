require("babel-polyfill");
// DOM manipulation lib (NOT jQuery)
require("chibijs");

window.PIXI = require("phaser-ce/build/custom/pixi");
window.p2 = require("phaser-ce/build/custom/p2");
window.Phaser = require("phaser-ce/build/custom/phaser-split");

const gameDimensions = 750;

// Keep this on CANVAS until Phaser 3 for performance reasons?
var game = new Phaser.Game({
    width: gameDimensions, 
    height: gameDimensions, 
    renderer: Phaser.WEBGL,
    enableDebug: true, // We can turn off debug when deploying - using debug causes a hit on webgl 
    parent: "game-container"
});

game.state.add("boot", require("./states/boot-state.js"));
game.state.add("load", require("./states/load-state.js"));
game.state.add("sandbox", require("./states/sandbox.js"));
game.state.start("boot");