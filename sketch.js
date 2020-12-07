var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = color(80,80,80);

  speed = random(55,90);
  weight = random(400,1500);

  deformation = Math.round((0.5 * weight * speed * speed)/22500);
}

function draw() {
  background("black");
  
  car.velocityX = speed;

  console.log(deformation);

  if (car.x - wall.x < car.width/2 + wall.width/2 && 
    wall.x - car.x < car.width/2 + wall.width/2 && 
    car.y - wall.y < car.width/2 + wall.width/2 && 
    wall.y - car.y < car.width/2 + wall.width/2) {
    if (deformation <= 100) {
      car.shapeColor = "lime";
    }
    else if (deformation > 100 && deformation < 180) {
      car.shapeColor = "yellow";
    }
    else if(deformation >= 180) {
      car.shapeColor = "red";
    }
    car.velocityX = 0;
  }
  else {
    car.shapeColor = "grey";
    wall.shapeColor = "grey";
  }

  drawSprites();
}