var bullet, wall;
var speed, weight,thickness;
var Damage;
function setup() {
  createCanvas(1600,400);
  
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,height / 2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background("black");  
  
  speed = random(223, 321);
  
  bullet.velocityX = speed;
  
  if (isTouching(bullet,wall)){
  bullet.velocityX = 0;
  Damage = 0.5 * weight * speed * speed / thickness * thickness * thickness;

  if (Damage > 10){
    wall.shapeColor = color(255,0,0);
  }
   else if (Damage < 10){
    wall.shapeColor = color(0,255,0);
  }
  
}
  
  drawSprites();
}


