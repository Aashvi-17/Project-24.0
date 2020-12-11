
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  manimg=loadImage("man.png");
  dustbinimg=loadImage("dustbin.png");
  cleanimg=loadImage("clean world.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  cleanup=createSprite(450,200,50,50);
  cleanup.addImage(cleanimg);
  cleanup.scale=0.2;
  cleanup.visible=false;
	paper= new Paper(80,200)
  ground= new Ground(300,430,1000,20)
  
  dustbin1= new Dustbin(621,370,20,80)
  dustbin2= new Dustbin(739,370,20,80)
  dustbin3= new Box(680,370,100,100)
 //dustbin3.addImage(dustbinimg);
  invisible=new Ground(80,240,50,20);

  man=createSprite(165,350,20,20);
  man.addImage(manimg);
 
  
 
  //box=createSprite(680,370,50,50);
  //box.addImage(dustbinimg);
 
 
	Engine.run(engine);
  
}


function draw() {
 // background="blue";
 // Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(CENTER);
  background("cyan");
  
  ground.display();
 
  
  //dustbin1.display();
  //dustbin2.display();
  dustbin3.display();
  
 
 if(paper.body.position.x>=dustbin3.body.position.x-50 && paper.body.position.x<=dustbin3.body.position.x+50 ){
  paper.body.restitution=0;
  paper.body.isStatic="true";
  dustbin3.body.restitution=0;
  dustbin3.body.isStatic="true";
 
 
   stroke("green");
    fill("green");
    textSize(30);
    text("THANK YOU",370,140);
 cleanup.visible=true;
}
else{
  paper.display();
}
drawSprites();
}

