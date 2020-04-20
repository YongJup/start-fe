var isDragable = false;
var $box = document.getElementById("box");
var boxX;
var boxY;

$box.addEventListener("mousedown", function (event) {
  isDragable = true;
  boxX = parseInt($box.style.left);
  boxY = parseInt($box.style.top);
  console.log(boxX, boxY);
});

$box.addEventListener("mousemove", function (event) {
  if (isDragable) {
    boxX += event.movementX;
    boxY += event.movementY;
    $box.style.left = boxX + "px";
    $box.style.top = boxY + "px";
  }
});

$box.addEventListener("mouseup", function (event) {
  isDragable = false;
});

function initBox() {
  $box.style.left = "10px";
  $box.style.top = "10px";
}

initBox();
