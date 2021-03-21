//the variables of the supply mission...
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,redboxbottomBody,redboxside1Body,ground

// the engine to be used to control the supply mission...
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// the preload function to load all the images...
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

// the setup function to create sprites and adding the engines to the world...
function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	redboxbottomSprite=createSprite(420,650,200,20);
	redboxbottomSprite.shapeColor=color("red")

	redboxside1Sprite=createSprite(310,570,20,200);
	redboxside1Sprite.shapeColor=color("red")

	redboxside2Sprite=createSprite(510,570,20,200);
	redboxside2Sprite.shapeColor=color("red")

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	//Create a packagebody...
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	
	//Create a redbox bottom body...
	redboxbottomBody = Bodies.rectangle(width/2 , 200 , 5 , {restitution:3, isStatic:false});
	World.add(world, redboxbottomBody);

//Create a redbox side1 body...
	redboxside1Body = Bodies.rectangle(width/2 , 200 , 5 , {restitution:3, isStatic:false});
	World.add(world, redboxside1Body);

	//Create a redbox side2 body...
	redboxside2Body = Bodies.rectangle(width/2 , 200 , 5 , {restitution:3, isStatic:false});
	World.add(world, redboxside2Body);

	//Create a Ground...
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  redboxbottomBody.x= redboxbottomSprite.position.x 
  redboxbottomBody.y= redboxbottomSprite.position.y 

  redboxside1Body.x= redboxside1Sprite.position.x 
  redboxside1Body.y= redboxside1Sprite.position.y

  redboxside2Body.x= redboxside2Sprite.position.x 
  redboxside2Body.y= redboxside2Sprite.position.y
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW  ) {
	packageSprite.isTouching(redboxbottomSprite)
	Matter.Body.setStatic(packageBody, false);		
}
}
    

    
 



