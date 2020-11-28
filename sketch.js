
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	
	 paper=new Paper(200,450,100);
	 dustbin1=new dustbin(1200,500);
	 ground=new Ground();
	Engine.run(engine);
  
}


function draw() {
  background(255);
  ground.display();
  dustbin1.display();
  paper.display();
}
function keyPressed()
{
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:700,y:-350}); 
	}
}

