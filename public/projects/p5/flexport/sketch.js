let mapImg;
let width = window.innerWidth;
let height = window.innerHeight;
let zoom = 1;

let clat = 0;
let clon = 0;

let lat  = 49.2827;
let lon  = -123.1207;

let map = `https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,${zoom},0,0/${width}x${height}?access_token=pk.eyJ1Ijoic2R1YnlhODIiLCJhIjoiY2pxcjlwZHMxMGNsbDQzdDN1cGpoaXQ1OSJ9.n6yirwq2zXgGEAmQts4wrg`
let apiKey = 'pk.eyJ1Ijoic2R1YnlhODIiLCJhIjoiY2pxcjlwZHMxMGNsbDQzdDN1cGpoaXQ1OSJ9.n6yirwq2zXgGEAmQts4wrg'

function preload() {
  mapImg = loadImage(map);
}

function mercX(lon) {
  lon = radians(lon);

  let a = (256 / PI) * pow(2, zoom);
  let b = lon + PI;
  return a * b;
}

function mercY(lat) {

  lat = radians(lat);

  let a = (256 / PI) * pow(2, zoom);
  let b = tan(PI / 4 + lat / 2);
  let c = PI - log(b);
  return a * c;
}

function setup() {
  // createCanvas(1024, 512)
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  translate(width/2, height/2);
  imageMode(CENTER);
  image(mapImg, 0, 0)

  let cx = mercX(clon);
  let cy = mercY(clat);

  let x = mercX(lon) - cx;
  let y = mercY(lat) - cy;

  fill(255, 0, 255, 200);
  ellipse(x, y, 8, 8);
}

function draw() {}

// function weatherAsk() {
//   let baseURL = api + input.value() + apiKey;
//   loadJSON(baseURL, gotData);
// }
//
// function gotData(data) {
//   shipments = data;
//   console.log(shipments);
// }
//
// function draw() {
//   background(0);
//
//   if (shipments) {
//     let route = shipments.main.route;
//     let distance = shipments.main.distance
//     ellipse(100, 100, route, route);
//     ellipse(300, 100, distance, distance);
//     // for (let i = 0; i < spacePeople.number; i++) {
//     //   fill(255)
//     //   stroke(255)
//     //   noFill()
//     //   ellipse(random(width), random(height), 24, 24);
//     // }
//   }
// }


//////////////////////
// window.onresize = function() {
//   let w = window.innerWidth;
//   let h = window.innerHeight;
//   canvas.size(w,h);
//   width = w;
//   height = h;
//
// };
