
//module aliases 
var Engine = Matter.Engine,
//Render = Matter.Render,
World = Matter.World,
Bodies = Matter.Bodies;

var engine ;
var world;
var boxes = [];
var boundaries = [];
var ground;

function setup(){
    createCanvas (400,400);
    engine = Engine.create();
    world = engine.world;
   Engine.run(engine);
    boundaries.push(new Boundary (100,150,width*0.6,30,0.1));
    boundaries.push(new Boundary (250,300,width*0.6,30,-PI /6));
}

function mouseDragged(){
    boxes.push(new Box (mouseX,mouseY ,random(10,40),random(10,40)));
}

function draw(){
    background(51);
    //Engine.update(engine);
    for (var i = 0 ; i< boxes.length ; i++){
        boxes[i].show();
    }
    for (var i = 0 ; i< boundaries.length ; i++){
        boundaries[i].show();
    }
    

}