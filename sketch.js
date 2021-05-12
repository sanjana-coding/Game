var diamond,girl,robber1;
var robber2,robber3,hole,ground;

var diamondImg,girlAnimation,holeImg,bgImg;
var robber1Img,robber2Img,robber3Img,bg;

function preload(){
  diamondImg=loadImage("diamond.png")
  holeImg=loadImage("hole.png")
  bgImg=loadImage("bg.jpg")
  robber1Img=loadImage("robber1.png")
  girlAnimation=loadAnimation("girl1.jpg","girl2.jpg","girl3.jpg","girl4.jpg","girl5.jpg","girl6.jpg","girl7.jpg")
  girl_falling=loadAnimation("girl2.jpg")
}

function setup(){
  createCanvas(windowWidth,windowHeight)

  bg=createSprite(700,320,windowWidth,windowHeight);
  bg.addImage(bgImg);
  bg.scale=1.75;
  bg.x=bg.width/2;

  hole=createSprite(width/2,height-127);
  hole.addImage(holeImg);
  hole.scale=0.35;

  girl=createSprite(1200,450,10,200);
  girl.addAnimation("Girl",girlAnimation);
  girl.addAnimation("Girl2",girl_falling);
  girl.scale=1.7;
  girl.velocityX=-4;
  
 robber=createSprite(200,450,10,200);
 robber.addImage(robber1Img);
 robber.scale=1.2;
 
 ground=createSprite(width/2,550,width,20)
 ground.visible=false
 
  girl.setCollider("rectangle",0,0,20,100)
  hole.setCollider("circle",0,0,60)

  diamond=createSprite(200,450,10,200)
  diamond.addImage(diamondImg)
  diamond.scale=0.3

  

  

}

function draw(){
 
  bg.velocityX=2;

  console.log(width)


if(bg.x>width/2+100){
  bg.x=bg.width/2
}

if(keyDown(UP_ARROW)&& girl.y >=150){
  girl.velocityY=-10;
  
}

girl.velocityY=girl.velocityY+0.5;
girl.collide(ground);

  if(girl.isTouching(hole)){
    girl.lifetime=3;
    girl.velocityX=0;
    girl.changeAnimation("Girl2")
    
    
  }

if(girl.isTouching(robber)){
  robber.destroy();
}

if(frameCount % 60 === 0){
  
}

  drawSprites();
}