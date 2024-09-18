// const canvas = document.getElementById('gameCanvas');
// const ctx = canvas.getContext('2d');
// const scale = 20;
// const rows = canvas.height / scale;
// const cols = canvas.width / scale;

// let snake = [{ x: 10 * scale, y: 10 * scale }];
// let food = generateRandomFood();
// let dx = scale;
// let dy = 0;
// let score = 0;
// let changingDirection = false;

// document.addEventListener('keydown', changeDirection);

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawSnake();
//     drawFood();
//     moveSnake();
//     checkCollision();
//     checkFood();
//     document.getElementById('score').textContent = `Score: ${score}`;
// }

// function drawSnake() {
//     ctx.fillStyle = 'green';
//     snake.forEach(part => ctx.fillRect(part.x, part.y, scale, scale));
// }

// function drawFood() {
//     ctx.fillStyle = 'red';
//     ctx.fillRect(food.x, food.y, scale, scale);
// }

// function moveSnake() {
//     const head = { x: snake[0].x + dx, y: snake[0].y + dy };
//     snake.unshift(head);
//     snake.pop();
// }

// function changeDirection(event) {
//     if (changingDirection) return;
//     changingDirection = true;
//     const key = event.key;
//     if (key === 'ArrowUp' && dy === 0) {
//         dx = 0;
//         dy = -scale;
//     } else if (key === 'ArrowDown' && dy === 0) {
//         dx = 0;
//         dy = scale;
//     } else if (key === 'ArrowLeft' && dx === 0) {
//         dx = -scale;
//         dy = 0;
//     } else if (key === 'ArrowRight' && dx === 0) {
//         dx = scale;
//         dy = 0;
//     }
// }

// function checkCollision() {
//     const head = snake[0];
//     if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
//         endGame();
//     }

//     for (let i = 1; i < snake.length; i++) {
//         if (snake[i].x === head.x && snake[i].y === head.y) {
//             endGame();
//         }
//     }
// }

// function checkFood() {
//     const head = snake[0];
//     if (head.x === food.x && head.y === food.y) {
//         score++;
//         snake.push({ ...snake[snake.length - 1] });
//         food = generateRandomFood();
//     }
// }

// function generateRandomFood() {
//     return {
//         x: Math.floor(Math.random() * cols) * scale,
//         y: Math.floor(Math.random() * rows) * scale
//     };
// }

// function endGame() {
//     alert('Game Over!');
//     document.location.reload();
// }

// function gameLoop() {
//     changingDirection = false;
//     draw();
// }

// setInterval(gameLoop, 100);


// let text = "";
// const fruits = ["apple", "orange", "cherry"];
// fruits.forEach((value, index, array) => {
//   console.log( index)
// })
// fruits.forEach(myFunction);

// document.getElementById("demo").innerHTML = text;

// function myFunction(item, index) {
//   text += index + ": " + item + "<br>";
// }

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]  git init toaddfiles add

const ages = [10, 3, 20, 18];
document.getElementById("demo").innerHTML = ages.find(checkAge);

function checkAge(age) {
  return age < 18;
}

//