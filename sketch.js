const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg;

var ground;
var box1,box2,box3;
var box4,box5,box6;
var box7,box8,box9;
var box10,box11,box12,box13,box14,box15;
var monster;

function preload() {
    backgroundImg = loadImage("sprites/background.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,370,1000,10);

    box1 = new Box(860,365,40,40);
    box2 = new Box(820,365,40,40);
    box3 = new Box(780,365,40,40);
    box4 = new Box(860,325,40,40);
    box5 = new Box(820,325,40,40);
    box6 = new Box(780,365,40,40);
    box7 = new Box(860,285,40,40);
    box8 = new Box(820,285,40,40);
    box9 = new Box(780,285,40,40);
    box10 = new Box(860,245,40,40);
    box11 = new Box(820,245,40,40);
    box12 = new Box(780,245,40,40);
    box13 = new Box(860,205,40,40);
    box14 = new Box(820,205,40,40);
    box15 = new Box(780,205,40,40);
    monster = new Monster(820,245,100,100);


}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    monster.display();
    
}
//function mouseDragged(){
 //   Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
//}


