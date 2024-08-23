var p, pRun, pJump, pStand;
var brick, brick2, brick3, brick4, brick5, brickI, brickI2;
var jump;
var win;
var tubeI;
var edges;
var button, bI;
var message, mI;
var playerState = "static";
var gamestate = 5;

function preload() {
  pAnimation = loadAnimation("marioMove.png", "mario.png");
  pJump = loadAnimation("marioJump.png");
  pStand = loadAnimation("mario.png");

  win = loadSound("win.mp3")

  jump = loadSound("jump.mp3")

  tubeI = loadAnimation("tube.png")

  brickI = loadAnimation("wall.png");

  brickI2 = loadImage("wall.png")

  bI = loadImage("button.png");

  mI = loadImage("text.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(rgb(136, 174, 196));

  edges = createEdgeSprites();

  p = createSprite(60, height - 68);
  p.scale = 0.5;
  p.addAnimation("run", pAnimation);
  p.addAnimation("jump", pJump);
  p.addAnimation("stand", pStand);
  p.changeAnimation("stand");

  button = createSprite(width / 2, height / 3);
  if (gamestate != 1) {
    button.visible = false;
  }
  button.addImage(bI);
  button.scale = 2;

  message = createSprite(width / 2, height / 6);
  if (gamestate != 1) {
    message.visible = false;
  }
  message.addImage(mI);

  brick = createSprite(60, height - 400)
  brick2 = createSprite(60, height - 400)
  brick3 = createSprite(60, height - 400)
  brick4 = createSprite(60, height - 400)
  brick5 = createSprite(60, height - 400)
  brick.addAnimation("regular", brickI)
  brick.addAnimation("tube", tubeI)
  brick.changeAnimation("regular")
  brick2.addImage(brickI2)
  brick3.addImage(brickI2)
  brick4.addImage(brickI2)
  brick5.addImage(brickI2)
  brick.visible = false
  brick2.visible = false
  brick3.visible = false
  brick4.visible = false
  brick5.visible = false
  brick.scale = 0.45
  brick2.scale = 0.45
  brick3.scale = 0.45
  brick4.scale = 0.45
  brick5.scale = 0.45
}

function draw() {
  background(rgb(136, 174, 196));
  //console.log(mouseX, mouseY)
  console.log(gamestate);
  console.log(brick2.velocityY);
  if (p.velocityY > 0) {
    playerState = "falling";
  }
  if (p.velocityY == 0) {
    playerState = "static";
  }

  if (gamestate == 1) {
    if (mousePressedOver(button)) {
      gamestate =2;
      button.destroy();
      message.destroy();
    }
    if (p.x > width + 10) {
      gamestate += 1;
      p.y = height - 67;
      p.x = width / 20;
    }
  }
  
  if (gamestate == 2) {
    if (p.x > width + 10) {
      gamestate =3;
      p.y = height - 67;
      p.x = width / 4;
    }

    brick.visible = true;
    brick2.visible = true;
    brick3.visible = true;
    brick4.visible = true;
    brick5.visible = true;

    brick.x = height / 2 - 200;
    brick2.x = height / 2 - 90;
    brick3.x = height / 2 + 26;
    brick4.x = height / 2 - 20;
    brick5.x = height / 2 - 10;

    brick.y = height - 52.8;
    brick2.y = height - 150;
    brick3.y = height - 250;
    brick4.y = height / 2 - 2;
    brick5.y = height / 2 - 100;
  }

  if (gamestate == 3) {
    if (p.x > width + 10) {
      gamestate =4;
      p.y = height - 67;
      p.x = width / 20;
    }

    brick.visible = true;
    brick2.visible = true;
    brick3.visible = true;
    brick4.visible = true;
    brick5.visible = true;

    brick.x = height / 2 - 300;
    brick2.x = height / 2 - 80;
    brick3.x = height / 2 - 300;
    brick4.x = height / 2 - 90;
    brick5.x = height - 300;

    brick.y = height - 52.8;
    brick2.y = height - 150;
    brick3.y = height - 370;
    brick4.y = height - 600;
    brick5.y = height / 2;
  }

  if (gamestate == 4) {
    if (p.x > width + 10) {
      p.y = height - 67;
      p.x = width / 20;
      gamestate =5;
    }

    brick.visible = true;
    brick2.visible = true;
    brick3.visible = true;
    brick4.visible = true;
    brick5.visible = true;

    brick.x = height / 2 - 0;
    brick2.x = height / 2 - 0;
    brick3.x = height / 2 - 0;
    brick4.x = height / 2 - 140;
    brick5.x = height - 200;

    brick.y = height - 50;
    brick2.y = height - 150;
    brick3.y = height - 250;
    brick4.y = height - 50;
    brick5.y = height / 2;
  }

  if (gamestate == 5) {
    textSize(30);
    brick.visible = true;
    brick2.visible = true;
    brick3.visible = true;
    brick4.visible = true;
    brick5.visible = true;

    brick.x = height - 70;
    brick2.x = height / 2 - 0;
    brick3.x = height / 2 - 140;
    brick4.x = height - 200;
    brick5.x = height - 70;

    brick.y = height - 120;
    brick2.y = height / 10;
    brick3.y = height / 10;
    brick4.y = height / 10;
    brick5.y = height - 50;

    brick2.velocityY = 16;
    brick3.velocityY = 20;
    brick4.velocityY = 14;

    brick2.bounceOff(edges[3]);
    brick3.bounceOff(edges[3]);
    brick4.bounceOff(edges[3]);
    brick2.bounceOff(edges[2]);
    brick3.bounceOff(edges[2]);
    brick4.bounceOff(edges[2]);

    if (p.x > width + 10) {
      p.y = height - 67;
      p.x = width / 20;
      gamestate =6;
      win.setVolume(0.3)
      win.play()
    }
  }
  if (gamestate == 6) {
    if (p.x > width + 10) {
      p.y = height - 67;
      p.x = width / 20;
      gamestate =7;
    }
    brick.changeAnimation("tube")
    

    if (p.isTouching(brick)) {
      textSize(100)
      
      text("You Win!", width / 2, height / 2)
    }

    brick.visible = true;
    brick2.destroy()
    brick3.destroy()
    brick4.destroy()
    brick5.destroy()

    brick.x = height / 2;

    brick.y = height - 50;
  }
  c();
  move();
  drawSprites();
}
