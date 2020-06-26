var bullet1,wall;
 var speed,weight;
  var bullet2,bullet3;
  var thickness
  function setup() {
  createCanvas(1600,400);
  speed = random (223,321)
  weight = random (30,52)
  thickness = random (22,83)
  bullet1 = createSprite (50,200,20,10)
  wall = createSprite (100,200,thickness,height/2)
  bullet1.velocityX=speed;
  wall.shapeColor=color(80,80,80)
  bullet2 = createSprite (50,100,20,10)
  bullet2.velocityX=speed;
  bullet3 = createSprite (50,300,20,10)
  bullet3.velocityX=speed;
}
function draw() {
  background(0);
  
 
      if(hasCollided(bullet,wall))
      {
        bullet.velocityX=0;
        var damage=0.5*bulletWeight*bulletSpeed*bulletSpeed/(ThicknessofWall*ThicknessofWall*ThicknessofWall)
       
      |
       if(damage>10)
      { 
       wall.shapeColor=color(255,0,0)
      }
       if(damage<10)
       {
        wall.shapeColor=color(0,255,0)
       }

      }

     drawSprites();

}
function hasCollided(Lbullet,Lwall)
{
  buletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}