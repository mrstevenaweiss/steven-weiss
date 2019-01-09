let bubble1;
let bubble2;

// Basic canvas
function setup() {
  // put setup code here
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  bubble1 = new Bubble(200, 200, 40)
  bubble2 = new Bubble(400, 200, 20)
  // print(bubble.x, bubble.y);
  // console.log(bubble.x, bubble.y);
}

function draw() {
  background(112)
  bubble1.show();
  bubble2.show();
  bubble1.move();
  bubble2.move();
}

//////////////////////
window.onresize = function() {
  let w = window.innerWidth;
  let h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
};
