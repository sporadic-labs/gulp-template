/**
 * Sandbox - this is the main level for now
 */

module.exports = Sandbox;

function Sandbox() {}

Sandbox.prototype.preload = function () { /* */ };

Sandbox.prototype.create = function () {
    // Shorthands
    var game = this.game;
    
    this.someText = this.add.text(this.world.centerX, this.world.centerY, 
        "Hello Gamer!", { 
            font: "64px Arial", 
            fill: "#000", 
            align: "center" 
        });
    this.someText.anchor.set(0.5);

};
