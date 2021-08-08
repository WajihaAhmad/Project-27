
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

  bobDiameter=50;

	bob1 = new Bob(200,300,50);
  bob2 = new Bob(300,300,50);
	bob3 = new Bob(400,300,50);
	bob4 = new Bob(500,300,50);
	bob5 = new Bob(600,300,50);
	roof1= new Roof(400,100,1800,50);

  rope1=new Rope(bob1.body,roof1.body,200,0)
  rope2=new Rope(bob2.body,roof1.body,300,0)
  rope3=new Rope(bob3.body,roof1.body,400,0)
  rope4=new Rope(bob4.body,roof1.body,500,0)
  rope5=new Rope(bob5.body,roof1.body,600,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



