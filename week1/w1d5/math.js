function square(n) {
  return n * n;
}

function circleArea(radius, precision) {
precision = 2 || precision
  return Math.PI * square(radius);
}


function circumference(radius, precision) {
  precision = 2 || precision
  return 2 * Math.PI * radius;
}

function roundToPrecision(number, precision) {
return Number(number.toFixed(precision));
}

module.export = {
  square: square,
  circleArea: circleArea,
  circumference: circumference
}