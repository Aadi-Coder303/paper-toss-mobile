// CREATED BY AADI GOLECHA ON 3rd OF JULY
//paper toss game


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;

var binWall1, binWall2;

var btn1;

function setup() {
  createCanvas(windowWidth,windowHeight);
  console.log(width);
  engine = Engine.create();
  world = engine.world;

  //creating button for applying force 
  btn1 = createImg('push.png');
  btn1.position (width/4,0);
  btn1.size(width/4,width/4);
  btn1.mouseClicked(hForce);



  //creating case
  ground =new Ground(width/2,height,1400,20);
  right = new Ground(width,height/2,20,800);
  left = new Ground(0,height/2,20,800);
  top_wall = new Ground(width/2,0,1400,20);

  //creating bin
  binWall1 = new Ground(width / 2 + width/4,height/2+height/4,width/20,height/4);

  var ballOptions = 
  {
    isStatic : false,
    restitution : 0.3,
    friction : 0,
    density : 1.2
  }

  ball = Bodies.circle(width/3,height/4, width/20,ballOptions);
  World.add(world,ball);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);

 ellipse(ball.position.x, ball.position.y, width/20);

  ground.show();
  top_wall.show();
  left.show();
  right.show();

  binWall1.show();

  let display = touches.length + ' touches';
  //text(display, 5, 10);

  if(display > 0)
  {
    hForce();
  }
  
  Engine.update(engine);
}

function hForce()
{
  Matter.Body.applyForce(ball, {x :0, y : 0.4} , {x :0.4, y : 0.4} );
}
