const $point = document.getElementById("point");
const $life = document.getElementById("life");
const $bug = document.getElementById("bug");
const $box = document.querySelector(".box");

const pixel = "px";
const interval = 1000;
const pointBug = 1;
const maxLife = 10;

let maxX;
let maxY;
let point;
let life;
let timer;

function boxClick(event) {
  let $clickedBox = event.target;
  if ($clickedBox === $bug) {
    point += pointBug;
    $bug.hidden = true;
  } else {
    life--;
  }
  refreshInfo();
}

function newBugPosition() {
  let rndX = Math.floor(Math.random() * maxX);
  let rndY = Math.floor(Math.random() * maxY);

  $bug.style.left = rndX + pixel;
  $bug.style.top = rndY + pixel;
  $bug.hidden = false;
}

function refreshInfo() {
  $point.innerHTML = point;
  $life.innerHTML = life;
  if (life <= 0) endGame();
}

function endGame() {
  clearInterval(timer);
  alert("gameover");
  $box.removeEventListener("click", boxClick);
}

function initGame() {
  point = 0;
  life = maxLife;
  maxX = $box.offsetWidth - $bug.offsetWidth;
  maxY = $box.offsetHeight - $bug.offsetHeight;
  timer = setInterval(newBugPosition, interval);
  $bug.hidden = true;
  refreshInfo();
}

$box.addEventListener("click", boxClick);
initGame();
