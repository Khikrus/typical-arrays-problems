
exports.min = function min (array) {
  if (array == 0 || array === undefined) {
    return 0;
  }
  return Math.min.apply(Math, array);
}

exports.max = function max (array) {
  if (array == 0 || array === undefined) {
    return 0;
  }
  return Math.max.apply(Math, array);
}

exports.avg = function avg (array) {
  let sum = 0;

  if (array == 0 || array === undefined) {
    return 0;
  }
  return array.reduce((a, b) => a + b) / array.length;
}