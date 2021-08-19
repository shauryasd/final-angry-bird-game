const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;
var ground, platform;
var backgroundImg;
var slingshot;
var score = 0;

function preload()
{
    getTime();
}



function setup()
{
    createCanvas(1200, 400);

    backgroundImg = loadImage("sprites/bg.png");

    myEngine = Engine.create();
    myWorld = myEngine.world;

    ground = new Ground(600, 390, 1200, 20);
    platform = new Ground(150, 300, 300, 163);

    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    pig1 = new Pig(810, 320);
    log1 = new Log(810, 260, 300, PI/2);

    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    pig2 = new Pig(810, 220);
    log2 = new Log(810, 200, 300, PI/2);

    box5 = new Box(810, 180, 70, 70);
    log3 = new Log(760, 120, 150, PI/7);
    log4 = new Log(870, 120, 150, -PI/7);

    bird = new Bird(200, 50);
    
    slingshot = new Slingshot(bird.body, {x: 200, y: 50 });
}

function draw()
{
    if(backgroundImg)
    {
      background(backgroundImg);  
    }
  

    textSize(30);
    text(mouseX + "," + mouseY, 418, 25);
    text("score:" + score, width-300, 100);

    Engine.update(myEngine);

    ground.display();
    platform.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
    
    slingshot.display();
}



function mouseDragged()
{
    if(slingshot.sling.bodyA === bird.body)
    {
    Matter.Body.setPosition(bird.body, {x: mouseX, y: mouseY});
    }
}
function mouseReleased()
{
    slingshot.fly();
}

function keyPressed()
{
    if(keyCode === 32)
    {
       bird.trajectory = [];
       Matter.Body.setPosition(bird.body, {x: 200, y:50});
       slingshot.attach(bird.body);
    }
}

async function getTime()
{
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json();
    
    var dateTime = responseJson.dateTime;
    var hour = dateTime.slice(11, 13);

    if(hour>=06 && hour<=19)
    {
        backgroundImg = loadImage("sprites/bg1.jpg");
    }
    else
    {
        backgroundImg = loadImage("sprites/bg2.jpg");
    }

}