let canvas = document.getElementById("snake-canvas");
let canvasContext = canvas.getContext("2d");
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let moveAppleWidth = Math.floor(Math.random() * (canvas.width - 15));
let moveAppleHeight = Math.floor(Math.random() * (canvas.height - 15));
let appleRadius = 10;
let snakeWidth = 50;
let snakeX = (canvas.width-snakeWidth)/2;

//movement listeners
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
}

//load all canvas functions
window.onload = function drawAll(){
    canvasContext.fillStyle = '#000000';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    drawApple();
    }
//apple to canvas + random location
function drawApple(){
    canvasContext.beginPath();
    canvasContext.arc(moveAppleWidth, moveAppleHeight, appleRadius, 0, Math.PI*2);
    canvasContext.fillStyle = '#f23';
    canvasContext.fill();
    canvasContext.closePath();
}

//snake to canvas
function drawSnake(){
    canvasContext.beginPath();
    canvasContext.rect(475, 125, snakeWidth, 20);
    canvasContext.fillStyle = '#4cbb17';
    canvasContext.fill();
    canvasContext.closePath();
}

//snake movement logic
if(rightPressed) {
    snakeX += 5;
}

if(leftPressed) {
    snakeX += 5;
}

if(upPressed) {
    snakeX += 5;
}

if(downPressed) {
    snakeX += 5;
}

setInterval(drawSnake, 100);

//To Do's:
//1)Get snake body to be able to move by all 4 arrow keys
//2) Ensure that the snake can wrap around the canvas
//3)Enable collision with apple that grows snake body by 25px
//4) Enable collision with snake body that invokes "Game-Over" modal
//5) Create a modal that has a button to "refresh" the page to start a new game.
//6) Add functionality when snake eats apple to increment score by 1.