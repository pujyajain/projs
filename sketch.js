var bg,bg2,form,system,code,security,choclateGroup,choclate;
var score=0;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var choclate = [];
function preload() {
  bg = loadImage("choclate.PNG");
  bg2 = loadImage("choclate2.PNG")
  
  basketImg = loadImage("basket2.png")
  choclateImage = loadImage("choclate3.png");
  choclate2Image = loadImage("choclate4.png");
  //choclate3Image = loadImage("choclate5.png");
  //choclate4Image = loadImage("choclate6.png");
  choclate1Image = loadImage("choclate1.png");
  choclate5Image = loadImage("choclate7.png");
  choclate6Image = loadImage("choclate8.png");
  choclate7Image = loadImage("choclate9.png");
  
}

function setup() {
  createCanvas(1400,800);
  system = new System()
  security = new Security()
  
  basket = createSprite(300, 520);
 basket.addAnimation("basketflying",basketImg);  
 basket.scale =1;

  
  engine = Engine.create();
 world = engine.world;

 choclateGroup = new Group()
 

 
 Engine.run(engine);
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
  
  if(score === 10) {
    clear();
    background(bg2)
    fill("black")
    textSize(40);
    text("welcome to the world of candies",250, 100);
    

    if(keyDown(RIGHT_ARROW)){
      basket.velocityX=6
     }
     
     if(keyDown(LEFT_ARROW)){
      basket.velocityX=-6
     }
    
     if (frameCount % 60 === 0) {
      var choclate = createSprite(random(100, 1000),0,600,100);
      
      choclate.scale = 0.01;
      choclate.velocityY = 3;
      var rand = Math.round(random(1,10));
                     switch(rand){
                         case 1: choclate.addImage("fruit1",choclateImage);choclate.scale = 0.04;

                         break;
                         case 2: choclate.addImage("fruit1", choclate2Image);choclate.scale = 0.04;
                         break;
                         //case 3: choclate.addImage("fruit1",choclate3Image);choclate.scale = 0.02;
                         break;
                         //case 4: choclate.addImage("fruit1", choclate4Image);choclate.scale = 0.05;
                         break;
                         case 3: choclate.addImage("fruit1", choclate6Image);choclate.scale = 0.1;
                         break;
                         case 4: choclate.addImage("fruit1", choclate1Image);choclate.scale = 0.04;
                         break;
                         
                         case 5: choclate.addImage("fruit1", choclate5Image);choclate.scale = 0.1;
                         break;
                         case 6: choclate.addImage("fruit1", choclate7Image);choclate.scale = 0.1;
                         break;

                         
                     }
      choclateGroup.add(choclate);
    } 
    for (var i = 0; i < choclateGroup .length; i++) { 
    if (choclateGroup.get(i).isTouching(basket)) {
      choclateGroup.get(i).destroy();
      
    }

  }

}

  drawSprites()
}