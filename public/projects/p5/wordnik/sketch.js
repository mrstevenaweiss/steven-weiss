let lineX = 0;
let api = 'http://api.open-notify.org/iss-now.json'

// Basic canvas
function setup() {
  // put setup code here
  canvas = createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(51)

  stroke(204, 102, 0)
  line(lineX, 0, lineX, height)

  lineX = lineX + 5;
  if (lineX > width) {
    lineX = 0
  }

}
