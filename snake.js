const board_border = 'red';
const board_background = "black";
const snake_col = 'green';
const snake_border = 'yellow';
let score = 0;
let dx = 10;
let dy = 0;
let changing_direction = false;
let appleX;
let appleY;
const snakeCanvas = document.getElementById("snake-canvas");
const snakeCanvasCtx = snakeCanvas.getContext("2d");

let snake = [
  {x: 200, y: 200},
  {x: 190, y: 200},
  {x: 180, y: 200},
  {x: 170, y: 200},
  {x: 160, y: 200}
]

main();

gen_food();

document.addEventListener("keydown", changeDirection);

function main() {

    if (has_game_ended()) return alert('Game Over!');

    changing_direction = false;
    setTimeout(function onTick() {
    clearCanvas();
    drawFood();
    moveSnake();
    drawSnake();

    main();
  }, 50)
}

function clearCanvas() {
  snakeCanvasCtx.fillStyle = board_background;
  snakeCanvasCtx.strokeStyle = board_border;
  snakeCanvasCtx.fillRect(0, 0, snakeCanvas.width, snakeCanvas.height);
  snakeCanvasCtx.strokeRect(0, 0, snakeCanvas.width, snakeCanvas.height);
}

function drawSnake() {
  snake.forEach(drawSnakePart)
}

function drawFood() {
    snakeCanvasCtx.fillStyle = 'red';
    snakeCanvasCtx.strokeStyle = 'darkgreen';
    snakeCanvasCtx.fillRect(appleX, appleY, 10, 10);
    snakeCanvasCtx.strokeRect(appleX, appleY, 10, 10);
  }

function drawSnakePart(snakePart) {

  snakeCanvasCtx.fillStyle = snake_col;
  snakeCanvasCtx.strokeStyle = snake_border;
  snakeCanvasCtx.fillRect(snakePart.x, snakePart.y, 10, 10);
  snakeCanvasCtx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function has_game_ended() {
    for (let i = 4; i < snake.length; i++) {
      if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true
    }
    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > snakeCanvas.width - 10;
    const hitTopWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > snakeCanvas.height - 10;
    return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall
  }



function randomApple(min, max) {
    return Math.round((Math.random() * (max-min) + min) / 10) * 10;
}

function gen_food() {
    appleX = randomApple(0, snakeCanvas.width - 10);
    appleY = randomApple(0, snakeCanvas.height - 10);
    snake.forEach(function has_snake_eaten_food(part) {
      const has_eaten = part.x == appleX && part.y == appleY;
      if (has_eaten) gen_food();
    });
  }

function changeDirection(event)
{
   const LEFT_ARROW = 37;
   const RIGHT_ARROW = 39;
   const UP_ARROW = 38;
   const DOWN_ARROW = 40;

   if (changing_direction) return;
   changing_direction = true;
   const keyPressed = event.keyCode;
   const goingUp = dy === -10;
   const goingDown = dy === 10;
   const goingRight = dx === 10;
   const goingLeft = dx === -10;
   if (keyPressed === LEFT_ARROW && !goingRight) {
     dx = -10;
     dy = 0;
   }
   if (keyPressed === UP_ARROW && !goingDown) {
     dx = 0;
     dy = -10;
   }
   if (keyPressed === RIGHT_ARROW && !goingLeft) {
     dx = 10;
     dy = 0;
   }
   if (keyPressed === DOWN_ARROW && !goingUp) {
     dx = 0;
     dy = 10;
   }
 }

 function moveSnake() {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);
    const has_eaten_food = snake[0].x === appleX && snake[0].y === appleY;
    if (has_eaten_food) {
      score += 1;
      document.getElementById('score').innerHTML = score;
      gen_food();
    } else {
      snake.pop();
    }
  }