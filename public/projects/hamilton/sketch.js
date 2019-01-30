var prob = 5000;
var list;
var start;
var started = false;
var total = 0;
var wordTotal;
var number = 0;
var entrants;

function setup() {
  noCanvas();

  entrants = select('#entrants');
  entrants.input(updateProbability);

  start = select('#start-button');
  start.mousePressed(startLottery);
  noLoop();

  // alert(lyrics.alexander_hamilton);
}

function updateProbability() {
  prob = entrants.html() / 10;

  select('#chance').html(prob);

  var notwinning = (prob - 1) / (prob);
  var num = log(0.01)/log(notwinning);

  select('#99percent').html(floor(num))
}

function startLottery() {
  started = true;
  total = 0;
  wordTotal = 0
  number = floor(random(0, 3))
  loop();
}


function draw() {

  // var lyrics = "How does a bastard, orphan, son of a whore and a Scotsman, dropped in the middle of a forgotten Spot in the Caribbean by providence, impoverished, in squalor, Grow up to be a hero and a scholar?"
  var song =  lyrics[number]

  list = song.split(', ')

  if (started) {
    var r = floor(random(prob));
    var results = select('#results');
    var words = select('#words');

    if (r === 1) {
      results.html('You won!')
      noLoop();
      // console.log('you won');
    } else {
      if (wordTotal == list.length) {
        wordTotal = -1;
      } else {

        var node = document.createElement("SPAN");
        var textnode = document.createTextNode(list[wordTotal] + " ");
        node.appendChild(textnode);
        document.getElementById("words").appendChild(node);
      }

    }
  total++;
  wordTotal++;

  select('#total').html(total);
  }
}
