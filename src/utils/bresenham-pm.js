export function PM(x1, y1, x2, y2, height, width) {
  var points = [];
  var dX = x2 - x1;
  var dY = y2 - y1;
  var x = x1;
  var y = y1;

  var xIncr, yIncr, d, incrE, incrNE;

  var X = Math.round(x);
  var Y = Math.round(y);

  points.push(X / (width / 2), Y / (height / 2));

  if (dX < 0) {
    dX = -dX;
    xIncr = -1;
  } else {
    xIncr = 1;
  }

  if (dY < 0) {
    dY = -dY;
    yIncr = -1;
  } else {
    yIncr = 1;
  }

  if (dX > dY) {
    d = 2 * dY - dX;
    incrE = 2 * dY;
    incrNE = 2 * (dY - dX);

    for (var k = 1; k <= dX; k++) {
      X += xIncr;
      if (d < 0) {
        d += incrE;
      } else {
        d += incrNE;
        Y += yIncr;
      }
      points.push(X / (width / 2), Y / (height / 2));
    }
  } else {
    d = 2 * dX - dY;
    incrE = 2 * dX;
    incrNE = 2 * (dX - dY);

    for (var i = 1; i <= dY; i++) {
      Y += yIncr;
      if (d < 0) {
        d += incrE;
      } else {
        d += incrNE;
        X += xIncr;
      }
      points.push(X / (width / 2), Y / (height / 2));
    }
  }

  return points;
}
