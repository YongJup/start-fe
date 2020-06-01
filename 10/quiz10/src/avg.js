/* eslint-disable no-plusplus */
function avg(...args) {
  function arrayAvg(arr) {
    let sum = 0;
    let count = 0;
    arr.forEach((e) => {
      if (!isNaN(e)) {
        sum += e;
        count++;
      } else if (Array.isArray(e)) {
        sum += arrayAvg(e);
        count++;
      }
    });
    return sum / count;
  }
  return arrayAvg(args);
}

export default avg;
