var retFixo, retMovendo;
function setup() {
  createCanvas(800, 400);
  retFixo = createSprite(400, 50, 50, 80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;
  retMovendo = createSprite(400, 350, 80, 30);
  retFixo.velocityY = 2;
  retMovendo.velocityY = -2;
  retMovendo.shapeColor = "green";
  retMovendo.debug = true;
}
function draw() {
  background(0, 0, 0);
  //retMovendo.x = World.mouseX;
  //retMovendo.y = World.mouseY;
  if (retMovendo.x - retFixo.x < retFixo.width / 2 + retMovendo.width / 2 
    && retFixo.x - retMovendo.x < retFixo.width/2 + retMovendo.width/2  
    && retFixo.y - retMovendo.y < retFixo.height/2 + retMovendo.height/2
    && retMovendo.y - retFixo.y < retFixo.height/2 + retMovendo.height/2) {
    retMovendo.shapeColor = "red";
    retFixo.shapeColor = "red";
    retMovendo.velocityY = retMovendo.velocityY * (-1);
    retFixo.velocityY = retFixo.velocityY * (-1);
  } else {
    retMovendo.shapeColor = "green";
    retFixo.shapeColor = "green";
  }
  drawSprites();
}
