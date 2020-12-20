
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, ground;
var dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper1 = new Paper(120, 200, 15);
	dustbin1 = new Dustbin(900, 500, 10, 100);
	dustbin2 = new Dustbin(1000, 550, 200, 10);
	dustbin3 = new Dustbin(1100, 500, 10, 100);
	ground = new Ground(200, 590, 20000, 30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body, paper1.body.position,{x : 100, y : 70});
	}
}


