// We didnt create or declare anything called document
console.log(document);

// document is a free object our browser gives us that represents our DOM
// left side: declaration of a js variable
// right side: calling a function, this function takes in a string of the
// element selector
const containerDiv = document.querySelector('#container-div');

console.log(containerDiv.innerText);
console.log(containerDiv.innerHTML);

const newHeader = document.createElement('h1');
newHeader.innerText = 'I am also a great baker';
containerDiv.append(newHeader);

const passions = ['baking', 'surfing them waves', 'draxxing dem sklounst', 'making movies'];
const passionSpan = document.querySelector('#passion-span');
let currentPassionsIndex = 0;

const typeOutPassions = function() {
  passionSpan.innerText = passions[currentPassionsIndex];
  
  if (currentPassionsIndex === passions.length - 1) {
    currentPassionsIndex = 0;
  } else {
    currentPassionsIndex+=1;
  }

  setTimeout(function() {
    typeOutPassions();
  }, 2000);
};

const locations = ['Diamond Princess', 'Machu Picchu', 'Jackpocket NYC Office', 'Queens'];
const locationSpan = document.querySelector('#location-span');
let currentLocationIndex = 0;

const typeOutLocations = function() {
  locationSpan.innerText = locations[currentLocationIndex];
  
  if (currentLocationIndex === location.length - 1) {
    currentLocationIndex = 0;
  } else {
    currentLocationIndex+=1;
  }

  setTimeout(function() {
    typeOutLocations();
  }, 3000);
};

// Lets make a TypeWriter class that creates
// an object with these properties
// - a value holding the type writer words
// - a value holding the reference to the html element being used to input the text
// - a function to trigger the type writer (theres a gotcha, has to do w/ calling itself)

// Make two instances of TypeWriter class

window.onload = function() {
  typeOutPassions();
  typeOutLocations();
};
