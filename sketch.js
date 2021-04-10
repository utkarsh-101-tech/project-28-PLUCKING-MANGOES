
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg;
var ground;

function preload()
{
boyImg= loadImage("PluckingMangoes/boy.png");
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree1= new Tree(1000,420,600,700);

	mango1 = new Mango(random(800,1200),random(150,400),25);
	mango2 = new Mango(random(800,1200),random(150,400),25);
	mango3 = new Mango(random(800,1200),random(150,400),25);
	mango4 = new Mango(random(800,1200),random(150,400),25);
  mango5 = new Mango(random(800,1200),random(150,400),25);
  mango6 = new Mango(random(800,1200),random(150,400),25);
	mango7 = new Mango(random(800,1200),random(150,400),25);
	mango8 = new Mango(random(800,1200),random(150,400),25);
	mango9 = new Mango(random(800,1200),random(150,400),25);
  mango10 = new Mango(random(800,1200),random(150,400),25);

	stone1 = new Stone(200,200,35);
  //stone = new Stone(150,550,20); 
  shot1 = new Shot(stone1.body,{x:240,y:585});

  var options={
            'isStatic':true
        }
        ground= Bodies.rectangle(800,770,1600,70,options);
        World.add(world,ground);

  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(135,206,250);
  

 // fill("brown");
 // rect(ground.x,ground.y,ground.width,ground.height);
 

  imageMode(CENTER);
  image(boyImg,300,655,200,300);

   tree1.display();

   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   mango6.display();
   mango7.display();
   mango8.display();
   mango9.display();
   mango10.display();

  detect(stone1,mango1);
  detect(stone1,mango2);
  detect(stone1,mango3);
  detect(stone1,mango4);
  detect(stone1,mango5); 
  detect(stone1,mango6);
  detect(stone1,mango7); 
  detect(stone1,mango8);
  detect(stone1,mango9);
  detect(stone1,mango10);

   stone1.display();
   shot1.display();
  drawSprites();
fill("brown");
  rect(800,770,1600,80);
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
 shot1.fly();
}

 
function detect(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r+1){
		Matter.Body.setStatic(lmango.body,false);
		
	}
}
function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone1.body,{x:200,y:200})
		shot1.attach(stone1.body);
	}
}
