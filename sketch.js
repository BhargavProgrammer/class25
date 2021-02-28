/*
We are using matter.js lib

1. create phy engine
2. create a world
3. create a bodies

var--stores a value, and that value will vary from time to time

const--stores a value, but it will not change


*/
//giving nick name-- nameSpacing
const Engine = Matter.Engine;
const Bodies=Matter.Bodies;
const World = Matter.World;

var myEng;
var myWorld;
var ground;
var ball;
var box1;

function setup() {
  createCanvas(1200,400);
  //createSprite(400, 200, 50, 50);

  myEng = Engine.create();
  myWorld= myEng.world;

  box1 = new Box(700,320, 70,70);
  console.log(box1);

  pig1 = new Pig(810,350);

  box2 = new Box(920, 320,70,70);

  log1 = new Log(810, 260, 300, PI/2);

  box3 = new Box(700,250,70,70);

  box4 = new Box(920,250,70,70);

  //box3 = new Box(600,50,50,50);

  

 

  pig2 = new Pig(810,250);

  log2 = new Log(810,230,300,PI/2);

  ground1 = new Ground(600,370,1200,20);

  box5 = new Box(810,180,70,70);

  log3 = new Log(780,200,150,PI/4)

  log4 = new Log(840,200,150,-(PI/4))

  bird1 = new Bird(100,200);

}

function draw() {
  background("pink");  

  Engine.update(myEng);

  ground1.display();
  box1.display();
  box2.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display()
  box5.display();
  log3.display();
  log4.display();
  bird1.display();

}