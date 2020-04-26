const $boxes = document.querySelectorAll(".box");
const pixel = "px";

let $clickedBox;
let offset = { x: 0, y: 0 };
let isDown = false;

$boxes.forEach((box) => {
  box.addEventListener("mousedown", (event) => {
    isDown = true;
    $clickedBox = event.target;
    offset.x = $clickedBox.offsetLeft - event.clientX;
    offset.y = $clickedBox.offsetTop - event.clientY;
    console.log("mouse down");
    console.log($clickedBox);
  });
  box.addEventListener("mouseup", (event) => (isDown = false));
});

document.body.addEventListener("mousemove", (event) => {
  if (!isDown) return;
  $clickedBox.style.left = event.clientX + offset.x + pixel;
  $clickedBox.style.top = event.clientY + offset.y + pixel;
});
