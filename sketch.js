var p, pRun, pJump, pStand;
var brick, brick2, brick3, brick4, brick5, brickI;
var jump;
var edges;
var button, bI;
var message, mI;
var playerState = "static";
var gamestate = 4;

function preload() {
  pAnimation = loadAnimation("marioMove.png", "mario.png");
  pJump = loadAnimation("marioJump.png");
  pStand = loadAnimation("mario.png");

  jump = loadSound("jump.mp3")

  brickI = loadImage("wall.png");

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

  createBricks();
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
    }
  }
  if (gamestate == 6) {
    if (p.x > width + 10) {
      p.y = height - 67;
      p.x = width / 20;
      gamestate =7;
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
  c();
  move();
  drawSprites();
}
