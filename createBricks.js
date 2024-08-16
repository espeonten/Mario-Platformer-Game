function createBricks() {
  brick = createSprite(60, height - 400)
  brick2 = createSprite(60, height - 400)
  brick3 = createSprite(60, height - 400)
  brick4 = createSprite(60, height - 400)
  brick5 = createSprite(60, height - 400)
  brick.addImage(brickI)
  brick2.addImage(brickI)
  brick3.addImage(brickI)
  brick4.addImage(brickI)
  brick5.addImage(brickI)
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