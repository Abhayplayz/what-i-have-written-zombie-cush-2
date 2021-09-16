var zombie;


function preload() {
zombie1 = loadImage("./assests/zombie1.png");
zombie2 = loadImage("./assests/zombie2.png");

zombie3 = loadImage("./assests/zombie3.png");
zombie4 = loadImage("./assests/zombie4.png");

backgroundImage = loadImage("./assests/background.png");
}





zombie = createSprite(width / 2, height - 110);
zombie.addAnimation("lefttoright", zombie1, zombie2, zombie1);
zombie.addAnimation("righttoleft", zombie3, zombie4, zombie3);
zombie.scale = 0.1;
zombie.velocityX = 10;

breakButton = createButton("");
breakButton.position(width - 200, height / 2 - 50);
breakButton.class("breakbutton")
breakButton.mousePressed(handleButtonPress);


function handleButtonPress() {
 jointLink.detach();
 setTimeout(() => {
    bridge.break();
  },  1500)
}






function draw()

drawsprites();