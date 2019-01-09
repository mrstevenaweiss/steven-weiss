let shipments;

let api = 'http://api.open-notify.org/astros.json'
let apiKey = '41a08de1c61033008bb1998ae0c66ed3'
let input;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);

  let button = select('#city-button')
  button.mousePressed(weatherAsk)

  input = select('#city')
}

function weatherAsk() {
  let baseURL = api + input.value() + apiKey;
  loadJSON(baseURL, gotData);
}

function gotData(data) {
  shipments = data;
  console.log(shipments);
}

function draw() {
  background(0);

  if (shipments) {
    let route = shipments.main.route;
    let distance = shipments.main.distance
    ellipse(100, 100, route, route);
    ellipse(300, 100, distance, distance);
    // for (let i = 0; i < spacePeople.number; i++) {
    //   fill(255)
    //   stroke(255)
    //   noFill()
    //   ellipse(random(width), random(height), 24, 24);
    // }
  }
}


//////////////////////
window.onresize = function() {
  let w = window.innerWidth;
  let h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
};
