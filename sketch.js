const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var car;
var acc;
var road;
var coin;
var breaker;

function preload(){
  back_img = loadImage("images/metroback.gif");
  car_img = loadImage("images/car.png");
  acc_img = loadImage("images/acc.png");
  coin_img = loadImage("images/coin.png");
  break_img = loadImage("images/break.png");
  road_img = loadImage("images/road.png");
}

function setup() {
  createCanvas( 900,500);
  engine = Engine.create();
  world = engine.world;

  coin = createSprite(50,46,10,10);
  coin.addImage("coin",coin_img);
  coin.scale = 0.1;

  // road = createSprite(width/2,365,10,10);
  // road.addImage("road",road_img);
  // road.scale = 1;

  road = new Ground(450,365,900,280);
 
  acc = createSprite(850,400,10,10);
  acc.addImage("acc",acc_img);
  acc.scale = 0.5;

  breaker = createSprite(80,400,10,10);
  breaker.addImage("break",break_img);
  breaker.scale = 0.5;

  // car = createSprite(100,300,10,10);
  // car.addImage("car",car_img);
  // car.scale = 0.3;

  car = new Car(100,300,150,100);


}

function draw() {
  background(back_img);
  Engine.update(engine);
  road.display();
  car.display();


  // camera.position.x = car.x;
  // camera.position.y = displayHeight;

  car.velocityX = 0;
  car.velocityY = 0;

  if(keyDown(LEFT_ARROW)){
    car.velocityX = -10;
   }

  if(keyDown(RIGHT_ARROW)){
    car.velocityX = 10;
   }

  drawSprites();
  textSize(25);
  fill("black");
  text("C",41,57);

  textSize(40);
  fill("black");
  text("RPM : ",30,106);
  text(" : ",60,57);
}