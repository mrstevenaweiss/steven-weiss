var characters = {
  "lear" : "Lucious",
  "kent" : "Cookie",
  "goneril" : "Hakeem",
  "regan" : "Andre",
  "cordelia" : "Cordelia",
  "gloucester" : "Vernon Turner",
  "cornwall" : "Rhonda",
  "edgar" : "Anika",
  "curan" : "Porsha",
  "edmund" : "Jeff Kingsley",
  "oswald" : "Rebecca",
  "albany" : "Tiana Brown",
  "fool" : "Thurston ‘Thirsty’ Rawlings,",
  "burgundy" : "Tariq Cousins",
  "old man" : "Giselle Sims-Barker",
  "officer" : "Tory Ash",
  "gentleman" : "Blake Sterling",
  "france" : "Maya",
}

// var seed1 = seed;

function namer(character) {
  return (characters[character])
}

function checker(word) {
  return (word == "france" || word == "gentleman" || word == "officer" || word == "old man" || word == "burgundy" || word == "fool" || word == "albany" || word == "oswald" || word == "edmund" || word == "curan" || word == "edgar" || word == "cornwall" || word == "cornwall" || word == "gloucester" || word == "goneril" || word == "kent" || word == "lear");
}

function upperCheck(word) {
  console.log(word);
  return word.toUpperCase() === word;
}

function printManuscript(seed) {

  var phrase = "";
  var character;

  for (let i = 0; i < seed.length; i++) {
    var word = seed[i];

    if (word !== "I" && upperCheck(word)) {
      if (phrase !== "") {
        createP(phrase).addClass('text');
        phrase = "";
      }

      word = namer(word.toLowerCase())

      createP(word.toUpperCase()).addClass('character');

    } else {
      character = checker(word.toLowerCase());

      if (word !== "I" && character == true) {

        phrase += namer(word.toLowerCase());
        phrase += " ";
      } else {
        phrase += word;
        phrase += " ";
      }
    }
  }
}


var manuscript;
var submit;
var words;

function preload() {
  lear = loadStrings("lear.txt")
}

function setup() {
  noCanvas();

  lear = join(lear, " ");
  words = splitTokens(lear, ' ,?!.');

  // manuscript = select("#manuscript");
  submit = select("#submit");
  submit.mousePressed(() => {

    var replay = printManuscript(words);
  })
}



// pass over the entire string and check to see if the word is there..
// replace...
