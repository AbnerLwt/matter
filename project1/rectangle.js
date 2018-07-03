    // module aliases
    var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 250, 50, 50);
var boxB = Bodies.rectangle(450, 50, 50, 50);
var boxC = Bodies.rectangle(420,150,80,80);
var ground = Bodies.rectangle(400, 550, 810, 60, { isStatic: true });

// add all of the bodies to the world
World.add(engine.world, [boxA, boxB,boxC, ground]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);