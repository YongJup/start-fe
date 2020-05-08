const $btn = document.getElementById("btn");
const $num = document.getElementById("num");
const $result = document.getElementById("result");
const $gugudanResult = document.createElement("span");

function gugudan() {
  let input = $num.valueAsNumber;
  let i = 0;
  let str = "";
  if (!input) {
    printError();
    return;
  }

  for (i = 1; i <= 9; i++) {
    str += `${input} * ${i} = ${input * i}<br>`;
  }
  $gugudanResult.innerHTML = str;
}

function printError() {
  alert("숫자를 입력해 주세요");
}

$btn.addEventListener("click", gugudan);
$result.appendChild($gugudanResult);
