var jungleimg
var bottomGround
var topGround
var lion
var crocodile
var bear
var explorerjohn
var explorersally
var croc
var explorer1


function preload(){
jungleimg = loadImage("assets/jungle image 2.jpg")
lion = loadImage("assets/lion animated.png")
crocodile = loadImage("assets/croc0dile img 2.jpg")
bear = loadImage("assets/bear img.jpg")
explorerjohn = loadImage("assets/man explorer.jpg")
explorersally = loadImage("assets/lady explorer.webp")

}

function setup(){
  createCanvas(windowWidth,windowHeight);

//background image
bg = createSprite(1200,450);
bg.addImage(jungleimg);
bg.scale = 5.2;

 croc = createSprite(450,750);
 croc.addImage(crocodile);
 croc.scale = 0.8;

 explorer1 = createSprite(1200,450);
 explorer1.addImage(explorerjohn);
 explorer1.scale = 0.3;
//creating top and bottom grounds
//bottomGround = createSprite(200,390,800,20);
//bottomGround.visible = false;

//topGround = createSprite(200,10,800,20);
//topGround.visible = false;
      
//creating balloon     
//balloon = createSprite(100,200,20,50);
//balloon.addAnimation("balloon",balloonImg);
//balloon.scale = 0.2;



}

function draw() {
  
  background("black");

   
        drawSprites();
        
}