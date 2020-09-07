
  var wall
  var bullet
  var speed
  var weight
  var thickness

  function setup () {
  createCanvas(1600,400);

  speed=random(223,321);
  thickness=random(30,52)
  weight=random(400,1500);

  bullet=createSprite(50,200,50,10)
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80);
  
}

function draw() {
  background(0);  
  drawSprites();

 hasCollided();

 
}


function hasCollided(bullet,wall)
{
 bulletRightEdge=bullet.x + bullet.width
 wallLeftEdge=wall.x
 if (bulletRightEdge>=wallLeftEdge)
 {
   return true
 }
   return false

   if (hasCollided(bullet,wall))
 
 {
   bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);

   if (damage>10)
   {
     wall.shapeColor=color(255,0,0);
   }

   if(damage<10)
    {
     wall.shapeColor=color(0,255,0); 
    }
 }
}










