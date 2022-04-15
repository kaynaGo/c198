var foquete,foqueteImg
var space,spaceImg
var meteoro,meteoroImg
var scores = 0
var record = 0
function preload(){

space = createSprite(400,700)
spaceImg = loadImage("space.png") 

foquete = createSprite(400,550,50,50)
foqueteImg = loadImage("foquete.png")

meteoroImg = loadImage("meteoro.png");
}

function setup() {
 createCanvas(800,800)
 space.addImage(spaceImg)

 foquete.addImage(foqueteImg)
 foquete.scale = 0.1
 
 


}

function draw() {
   space.velocityY = 2
   if(space.y > 800) {
    space.y = -100

   }
  
   foquete.x = World.mouseX
   meteoro1()
   if(frameCount % 10 ==0){
     scores +=1
   }
   rectMode(CENTER)
  fill("white")
  textSize(50);
  text("pontos"+ scores,400,600)
  
 drawSprites();

}
   
   
function meteoro1(){
 
 if(frameCount % 50 == 0 ){
   meteoro = createSprite(400,-820)
   meteoro.x = Math.round(random(20,780));
   meteoro.addImage(meteoroImg)
   meteoro.velocityY = 10;
   meteoro.lifeTime = 100;
   meteoro.scale = 0.1;
 }
}

function reset(){
  if(meteoro.isTouching(foquete)){
    meteoro.remove()
  }
}