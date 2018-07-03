var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;


var engine;
var world;
var boxes = [];
var ground;



function mouseDragged(){
    boxes.push(new Box(mouseX,mouseY,20,20));
}

function  setup() {
    

    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    var option1 = {
        isStatic:true
    }
    ground = Bodies.rectangle (200,height-100,width,10,option1);
    World.add(world,ground);

}

function draw(){
    background(51);
   for(var i=0; i<boxes.length ; i++ ){
    boxes[i].show();
    }
    fill(170);
    noStroke();
    strokeWeight(4);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,width,10);
    
}