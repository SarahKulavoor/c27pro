
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob,ground,rope;
var bob1,bob2,bob3,bob4,bob5;



function setup() {
	createCanvas (1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Roof (400,120,1600,35);

	bob1 = new Bob(260,400,30);
	bob2 = new Bob(320,400,30);
	bob3 = new Bob(380,400,30);
	bob4 = new Bob(440,400,30);
	bob5 = new Bob(500,400,30);

	rope1= new Rope (bob1.body, ground.body, -140, 0);
	rope2= new Rope (bob2.body, ground.body, -70, 0);
	rope3= new Rope (bob3.body, ground.body,  0, 0);
	rope4= new Rope (bob4.body, ground.body, 70, 0);
	rope5= new Rope (bob5.body, ground.body, 140, 0);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(255);

  Engine.update(engine);

  textSize (35)
  text ("Press left arrow key to swing the cradle", 200, 600) 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  ground.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === LEFT_ARROW)
	{
		Matter.Body.applyForce(bob1.body, bob1.position,{x:-165,y:-175})
	}
}
