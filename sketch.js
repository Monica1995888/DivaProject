var injection,germ;
var injection_image,germ_image;
var wall,wall2,wall3,wall4;
var germGroup;
function preload(){
injection_image=loadImage("injection-removebg-preview.png");
germ_image=loadImage("germs-removebg-preview.png");


}
function setup() {
  createCanvas(800,400);
 injection= createSprite(400, 200, 50, 50);
 injection.addImage(injection_image);
 injection.scale=0.3
 injection.debug=true;
 injection.setCollider("rectangle",0,0,200,100)
wall1= createSprite(0,395,1600,10);
wall2= createSprite(0,5,1600,10);
wall3= createSprite(5,0,10,800);
wall4= createSprite(795,0,10,800);

germGroup = new Group();

  }

function draw() {
  background(0); 
  if(keyDown(UP_ARROW))
  {
    injection.y=injection.y-5;
  }
  if(keyDown(RIGHT_ARROW))
  {
    injection.x=injection.x+5;
  }
  if(keyDown(DOWN_ARROW))
  {
    injection.y=injection.y+5;
  }
  if(keyDown(LEFT_ARROW))
  {
    injection.x=injection.x-5;
  }

  germs();
if(germGroup.isTouching(injection))
{
  germGroup.destroyEach();

  textSize(60);
  fill("red");
  text(" Good work",300,100)
}

  
drawSprites();
}
function germs()
{
//write code here to spawn the clouds
   if (frameCount % 100 === 0) 
   {
    var germ= createSprite(200,200,50,50);
    germ.debug=true;
    Math.y=Math.round(random(80,200)) 
    
  
    germ.addImage(germ_image);
    germ.velocityX= 2
    germ.velocityY= 4
    germ.scale=0.2
    germGroup.add(germ)
    
    
   
    }
    germGroup.bounceOff(wall1)
    germGroup.bounceOff(wall2)
    germGroup.bounceOff(wall3)
    germGroup.bounceOff(wall4)

   
        
     
     }











