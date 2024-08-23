function move() {
  if (keyDown("right") && disableMove == false) {
    p.changeAnimation("run");
    p.x += 5;
  } else if (keyWentUp("right")) {
    p.changeAnimation("stand");
  }

  if (keyDown("left") && disableMove == false) {
    p.changeAnimation("run");
    p.x -= 5;
  } else if (keyWentUp("left")) {
    p.changeAnimation("stand");
  }

  if (keyDown("up") && (p.velocityY === 0 || p.velocityY > 0) && disableMove == false) {
    p.changeAnimation("jump");
    jump.setVolume(0.3)
    jump.play()
    p.velocityY = -12;
  }

  p.velocityY += 0.3; // Gravity

  // Collision handling
  p.collide(edges[0]);
  p.collide(edges[2]);
  p.collide(edges[3]);
  p.collide(brick);
  p.collide(brick2);
  p.collide(brick3);
  p.collide(brick4);
  p.collide(brick5);
}
