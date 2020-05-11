const $min = document.getElementById('min');
const $max = document.getElementById('max');
const $btn = document.getElementById('btn');
const $box = document.getElementById('box');

let rndNum = 0;
let timer;

function animation() {
  const boxNum = parseInt($box.innerHTML, 10);
  if (rndNum === boxNum) clearInterval(timer);
  $box.innerHTML = boxNum + 1;
}

function genRndNum() {
  const max = parseInt($max.value, 10);
  const min = parseInt($min.value, 10);
  rndNum = Math.floor(Math.random() * (max - min + 1) + min);

  $box.innerHTML = rndNum - 50;
  timer = setInterval(animation, 10);
}

$btn.addEventListener('click', genRndNum);
