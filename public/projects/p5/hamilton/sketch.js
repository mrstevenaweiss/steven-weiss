var prob = 5000;

function setup() {
  noCanvas();
}

function draw() {
  var r = floor(random(5000));

  if (r === 1) {
    console.log('you win');
  } else {
    console.log('lost');
  }
}
