var pacman, pacmanImg, inky, inkyImg, blinky, blinkyImg, pinky, pinkyImg, clyde, clydeImg;
var ground, groundImg, invisibleGround;

function preload() {
  pacmanImg = loadAnimation("assets/pacman1.png", "assets/pacman2.png");
  clydeImg = loadImage("assets/orange ghost.png");
  pinkyImg = loadImage("assets/pink ghost.png");
  inkyImg = loadImage("assets/ink ghost.png");
  groundImg = loadImage("assets/ground.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pacman = createSprite(width/2 - 500, height/2);
  pacman.addAnimation("pacman GIF",pacmanImg);
  pacman.scale = 0.3;

  ground = createSprite(width/2, height/2 + 50, 20,20)
  ground.addImage(groundImg);
}

function draw() {
  background("#00008B");
  drawSprites();
}