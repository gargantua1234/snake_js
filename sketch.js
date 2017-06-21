var bg;
var snake;
var snakePhoto;
var scl = 30;
var fruit;

function setup() {
    bg = loadImage("assets/background.jpg");
    createCanvas(600, 500);
    snake = new Snake();
    fruit = new Fruit();
}

function draw() {
    background(bg);
    if (snake.eat(fruit)) {
        fruit.pickLocation();
    }
    snake.death();
    snake.update();
    snake.show();
    fruit.show();
}


function keyPressed() {
    if (snake.xSpeed === 0)
        horizontalMovement();
    else if (snake.ySpeed === 0)
        verticalMovement();
}

function horizontalMovement() {
    if (keyCode === RIGHT_ARROW)
        snake.direction(1, 0);
    else if (keyCode === LEFT_ARROW)
        snake.direction(-1, 0);
}

function verticalMovement() {
    if (keyCode === UP_ARROW)
        snake.direction(0, -1);
    else if (keyCode === DOWN_ARROW)
        snake.direction(0, 1);
}

function mousePressed() {
    snake.total++;
}
