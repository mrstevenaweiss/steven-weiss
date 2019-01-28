

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0)
  stroke(255);
  noFill();
  drawCircle(windowWidth/2, windowHeight/3, 900);
  fill(255)
  rect(windowWidth/2, windowHeight/3, 10, 50);
}

function drawCircle(x, y, d) {
  ellipse(x, y, d);
  if (d > 2) {
    drawCircle(x + d * 0.5, y, d * 0.5);
    drawCircle(x - d * 0.5, y, d * 0.5);
  }
}
