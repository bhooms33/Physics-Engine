const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options ={
    isStatic: true
}

ground = Bodies.rectangle(400,350,400,20,ground_options);
World.add(world,ground);

var ball_options ={
  restitution: 1.0
}

ball = Bodies.circle(400,100,20, ball_options);
World.add(world,ball);
}

function draw() {
  background("skyblue");  
  Engine.update(engine);
  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}