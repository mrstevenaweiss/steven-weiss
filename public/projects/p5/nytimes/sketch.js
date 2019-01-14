let userInput;
// let movie;

// let urlGeneral = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=bird%20box&api-key=085377149a91472ea587824181be1fe6'
// let apiOneMovie = `http://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${movie}&api-key=085377149a91472ea587824181be1fe6`
// let apiCritics = 'http://api.nytimes.com/svc/movies/v2/reviews/search.json?critics-pick=1&api-key=085377149a91472ea587824181be1fe6'
// let apiKey = '085377149a91472ea587824181be1fe6'

// function grabURL(term) {
//   return `http://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${movie}&api-key=085377149a91472ea587824181be1fe6`
// }

function setup () {
  noCanvas();
  userInput1 = select('#userinput1')
  // userInput2 = select('#userinput2')
  // userInput3 = select('#userinput3')

  button = select('#main-button')
  button.mousePressed(goTimes);

  // userInput1.changed(goTimes)
  // goTimes()
}

function goTimes() {
  let movies = [];
  let movieInput = userInput1.value();

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
  // console.log(movieData);

  for (let i = 0; i < movies.length ; i++) {
    console.log(movies[i].display_title);
    console.log(movies[i].critics_pick);
    if (movies[i].critics_pick == 1) {
      createElement('h1', movies[i].display_title);
      createElement('p', movies[i].summary_short);
    }
  }
}
