let userInput;
let buttonGo;
let buttonClear;
let hello;

function setup () {
  noCanvas();
  userInput = select('#userinput')


  buttonGo = select('#main-button')
  buttonGo.mousePressed(goTimes);

  buttonBye = select('#clear-button')
  buttonBye.mousePressed(resetProg);

}

function resetProg() {
  elements = document.querySelectorAll('h2')
  summaries = document.querySelectorAll('.summary')

  for (let i = 0; i < elements.length ; i++) {
    elements[i].remove()
    summaries[i].remove()
  }
}

function goTimes() {
  let movies = [];
  let movieInput = userInput.value();

  movies = movieInput.split(', ')

  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i].replace(/ /g, "%20")
    let request = `http://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${movie}&api-key=085377149a91472ea587824181be1fe6`

    loadJSON(request, gotData);
  }
}

// function that handles the async nature of data
function gotData(data) {
  let movieData = data.results

  for (let i = 0; i < movieData.length ; i++) {

    if (movieData[i].critics_pick == 1) {
      createElement('h2', movieData[i].display_title);
      createElement('p', movieData[i].summary_short).addClass('summary');;

    }
  }
}
