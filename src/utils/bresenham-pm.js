export function PM(x1, y1, x2, y2, height, width) {
  var points = [];
  var deltaX = x2 - x1;
  var deltaY = y2 - y1;
  var x = x1;
  var y = y1;

  var xIncr, yIncr, p, c1, c2;

  var X = Math.round(x);
  var Y = Math.round(y);

  points.push(X / width, Y / height);

  if (deltaX < 0) {
    deltaX = -deltaX;
    xIncr = -1;
  } else {
    xIncr = 1;
  }

  if (deltaY < 0) {
    deltaY = -deltaY;
    yIncr = -1;
  } else {
    yIncr = 1;
  }

  if (deltaX > deltaY) {
    p = 2 * deltaY - deltaX;
    c1 = 2 * deltaY;
    c2 = 2 * (deltaY - deltaX);

    for (var k = 1; k <= deltaX; k++) {
      X += xIncr;
      if (p < 0) {
        p += c1;
      } else {
        p += c2;
        Y += yIncr;
      }
      points.push(X / width, Y / height);
    }
  } else {
    p = 2 * deltaX - deltaY;
    c1 = 2 * deltaX;
    c2 = 2 * (deltaX - deltaY);

    for (var i = 1; i <= deltaY; i++) {
      Y += yIncr;
      if (p < 0) {
        p += c1;
      } else {
        p += c2;
        x += xIncr;
      }
      points.push(X / width, Y / height);
    }
  }

  return points;
}
