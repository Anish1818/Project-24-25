
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;

var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(600,height,1200,20);
	paper=new Paper(300,400,70);
	dustbin=new Dustbin(1000,480);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbin.display();
  paper.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:110,y:-145});
	}

	
}


