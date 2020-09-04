export function DDA(x1, y1, x2, y2, height, width) {
  var points = [];
  var deltaX = x2 - x1;
  var deltaY = y2 - y1;

  var x = x1,
    y = y1;

  var X = Math.round(x);
  var Y = Math.round(y);

  points.push(X / height, Y / width);

  var passos = Math.max(Math.abs(deltaX), Math.abs(deltaY));
  var xIncr = deltaX / passos;
  var yIncr = deltaY / passos;

  for (var k = 1; k <= passos; k++) {
    X += xIncr;
    Y += yIncr;

    points.push(X / height, Y / width);
  }

  return points;
}