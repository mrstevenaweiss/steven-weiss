var characters = {
  "Capulet" : "Empire",
  "Montague" : "Lyon",

  "Lear" : "Lucious",
  "Goneril" : "Hakeem",
  "Regan" : "Jamal",
  "Cordelia" : "Andre",
}

"Juliet" : "Cookie",

var manuscript;
var submit;

function setup() {
  noCanvas();
  manuscript = select("#manuscript");
  submit = select("#submit");
  submit.mousePressed(replace)
}


function replace() {
  createP(manuscript.value());
  console.log(characters["Romeo"]);
}

split the string into an array...
pass over the entire string and check to see if the word is there..
replace...
