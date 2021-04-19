var girl, girl_walking; 
var bg; 

function preload() {

  girl_walking= loadAnimation("girl 1.png", "girl2.png", "girl3.png", "girl4.png");
  bg= loadImage("snow1.jpg")
}

function setup() {
  createCanvas(1000,600);

  girl= createSprite(900, 500, 50, 50);
  girl.addAnimation(girl_walking);
}

function draw() {
  background(bg);  



  drawSprites();
}