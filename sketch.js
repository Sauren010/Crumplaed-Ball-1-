
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var log1;
var log2;
var log3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	log1 = new Dustbin(750,225,20,100);
	log2 = new Dustbin(650,225,20,100);
  log3 = new Dustbin(700,270,80,10);
  ground = new Ground(100,280,10000,10);
  paper = new Paper(200,200,15);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  log1.display();
  log2.display();
  log3.display();
  ground.display();
  paper.display();
  
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-35});
  }
}