const startBtn = document.getElementById("start"),
  screens = document.querySelectorAll(".screen"),
  timeList = document.getElementById("time-list"),
  board = document.getElementById("board"),
  timeEl = document.getElementById("time"),
  colors = [
    "tomato",
    "thistle",
    "teal",
    "tan",
    "lightpink",
    "lightslategrey",
    "magenta",
    "mistyrose",
    "paleturquoise",
    "seagreen",
    "whitesmoke",
    "steelblue",
  ];

let time = 0,
  score = 0;

startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (e) => {
  if (e.target.classList.contains("time-btn")) {
    time = parseInt(e.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    startGame();
  }
});

board.addEventListener("click", (e) => {
  if (e.target.classList.contains("circle")) {
    score++;
    e.target.remove();
    createRandomCircle();
  }
});

function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function decreaseTime() {
  if (time === 0) {
    stopGame();
  } else {
    let current = --time;
    if (current < 10) current = `0${current}`;
    setTime(current);
  }
}

function createRandomCircle() {
  const circle = document.createElement("div");
  const size = getRandomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);
  const color = getRandomColor();

  circle.classList.add("circle");
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.background = color;

  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function stopGame() {
  timeEl.parentNode.classList.add("hide");
  board.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span></h1>`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
