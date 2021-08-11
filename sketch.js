const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world;
var roof;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(1360, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(680,100,300,20,roof_options);
    World.add(world,roof);
	bob1 = new Bob(580,450)
	bob2 = new Bob(630,450)
	bob3 = new Bob(680,450)
	bob4 = new Bob(710,450)
	bob5 = new Bob(780,450)

	rope1 = new rope(bob1.body,roof, -50*2,0)
	rope2 = new rope(bob2.body,roof, -50,0)
	rope3 = new rope(bob3.body,roof, 0,0)
	rope4 = new rope(bob4.body,roof, 50,0)
	rope5 = new rope(bob5.body,roof, 50*2,0)
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
 // Engine.update(engine);
  rect(roof.position.x,roof.position.y,230,20);
  //call display() to show ropes here
    rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
  
  //create ellipse shape for multiple bobs here
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

}


//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.position,{x:-100,y:-100})
	}
}