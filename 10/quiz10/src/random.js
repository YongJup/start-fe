function random(min, max) {
  if (!max && !isNaN(min)) {
    return Math.floor(Math.random() * min);
  } else if (isNaN(min) || isNaN(max)) {
    return -1;
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
export default random;
