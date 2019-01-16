var prob = 5000;
var start;
var started = false;
var total = 0;

var entrants;

function setup() {
  noCanvas();

  entrants = select('#entrants');
  entrants.changed(updateProbability);

  start = select('#start-button')
  start.mousePressed(startLottery)
  noLoop();

  console.log('truly connected');
  // alert(lyrics.alexander_hamilton);
}

function updateProbability() {
  prob = 50000 / entrants.html();

  select('#chance').html(prob)
}

function startLottery() {
  started = true;
  total = 0;
  loop();
}


function draw() {
  if (started) {
    var r = floor(random(prob));

    var results = select('#results')

    if (r === 1) {
      results.html('you won!')
      noLoop();
      // console.log('you won');
    } else {
      results.html('try again')
      // console.log('you lost');
    }
  total++;
  
  select('#total').html(total);
  }

}
