
// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var engine,world;
var dustBin1,ground,canonBall;
var dustBin2,dustBin3;
/*
const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine
*/

function setup() {
    // Setup the canvas, the ground the, dustBin, the shooting ball and the bubble balls.
    var canvas = createCanvas(400, 400);
    engine = Engine.create();
    world=engine.world;
    dustBin1 =  new DustBin(200, 200, 60, 10);
    dustBin2 =  new DustBin(200, 200, 60, 10);
    dustBin3 =  new DustBin(200, 200, 60, 10);
    
    ground  =  new Ground(200,390,400,20);
    canonBall= new CanonBall(300,200,20,20);

}

function draw() {
// Remember to update the Matter Engine and set the background.
 background(0);
    Matter.Engine.update(engine);
    dustBin.display();
    ground.display();
    canonBall.display();   
}


function keyReleased() {
    
}