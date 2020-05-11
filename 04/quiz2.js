/* eslint-disable no-plusplus */
const board = document.getElementById('board');
board.style.height = '400px';
board.style.width = '400px';

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    const span = document.createElement('span');
    span.style.display = 'inline-block';
    span.style.height = '100px';
    span.style.width = '100px';
    if ((i + j) % 2 === 0) {
      span.className = 'black';
      span.style.backgroundColor = 'black';
    } else {
      span.className = 'white';
    }
    board.appendChild(span);
  }
}
// debugger;
// eslint-disable-next-line no-unused-vars
function resetBored() {
  let index = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if ((i + j) % 2 === 0) {
        board.children[index].style.backgroundColor = 'black';
      } else {
        board.children[index].style.backgroundColor = 'white';
      }
      index++;
    }
  }
}
board.addEventListener('click', (event) => {
  resetBored();
  const { target } = event;
  if (target !== board) {
    target.style.backgroundColor = 'red';
  }
});
