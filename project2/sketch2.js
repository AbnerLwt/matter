var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;


var engine;
var world;
var boxes = [];
var ground;



function mouseDragged(){
    boxes.push(new Box(mouseX,mouseY,random(10,40),random(10,40)));
}

function  setup() {
    

    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    //Engine.run(engine);
    ground = new Boundary(200,height,width,3);
    World.add(world,ground);

}

function draw(){
    background(51);
    ngine.update(engine);
    for(var i=0; i<boxes.length ; i++ ){
    boxes[i].show();
    }
    ground.show();
    
}