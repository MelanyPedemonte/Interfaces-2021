let bird = new Bird();
let obstacle = new Obstacle(0,100, 0, 400);
let star = new Star(300,200);
let game = new Game(bird, obstacle, star);
game.initGame();
