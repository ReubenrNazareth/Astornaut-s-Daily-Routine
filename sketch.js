var bgImg, sleep, brush, gym, eat, drink, move, bath;
var background;
var astronaut;

function preload(){
  bgImg =  loadImage("Astronaut's daily routine/iss.png");
  sleep = loadImage("Astronaut's daily routine/sleep.png");
  brush = loadImage("Astronaut's daily routine/brush.png");
  gym = loadAnimation("Astronaut's daily routine/gym1.png", "Astronaut's daily routine/gym2.png");
  drink = loadAnimation("Astronaut's daily routine/drink1.png", "Astronaut's daily routine/drink2.png");
  eat = loadAnimation("Astronaut's daily routine/eat1.png", "Astronaut's daily routine/eat2.png");
  move = loadAnimation("Astronaut's daily routine/move.png", "Astronaut's daily routine/move1.png");
  bath = loadAnimation("Astronaut's daily routine/bath1.png", "Astronaut's daily routine/bath2.png"); 
}

function setup() {
  createCanvas(600, 600);

  background = createSprite(300,300);
  background.addImage("background", bgImg);

  astronaut = createSprite(300,300,10,10);
  astronaut.addImage("sleeping", sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(0);
    textSize(18);
    text("Up Arrow = Brushing", 20,20)
    textSize(10);
    text("Down Arrow = Gyming", 30,30)
    textSize(18);
    text("Left Arrow = Eating", 40,40)
    textSize(18);
    text("Right Arrow = Bathing", 50,50)
    textSize(18);
    text("m Key = Moving", 60,60)

 createEdgeSprites();
 astronaut.bounceOff = edgeSprites;

   if(keyDown("UP_ARROW")){
     astronaut.addImage("brushing", brush);
     astronaut.y = 350;
     astronaut.velocityX = 0;
     astronaut.velocityY = 0;
   }
   
   if(keyDown("DOWN_ARROW")){
     astronaut.addAnimation("gyming", gym);
     astronaut.changeAnimaiton("gyming");
     astronaut.y = 350;
     astronaut.velocityX = 0;
     astronaut.velocityY = 0;
    }

   if(keyDown("LEFT_ARROW")){
     astronaut.addAnimation("bathing", bath);
     astronaut.changeAnimaiton("bathing");
     astronaut.y = 350;
     astronaut.velocityX = 0;
     astronaut.velocityY = 0;
    }

    if(keyDown("RIGHT_ARROW")){
     astronaut.addAnimation("eating", eat);
     astronaut.changeAnimaiton("eating");
     astronaut.y = 350;
     astronaut.velocityX = 0;
     astronaut.velocityY = 0;
    }  
   
    if(keyDown("m")){
     astronaut.addAnimation("moving", move);
     astronaut.changeAnimaiton("moving");
     astronaut.y = 350;
     astronaut.velocityX = 0;
     astronaut.velocityY = 0;
    }

  drawSprites();
}