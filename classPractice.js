// Objects - a javascript type that holds a set of key value pairs

const number = 4;
const aWord = 'a word';

const dog1 = {
  name: 'Scruffy',
  age: 3,
  bark: function() {
    console.log('PSEIFSEIIRGSKRGR!!!!!');
  },
};

const dog2 = {
  name: 'Cindy',
  age: 5,
};

console.log(dog1);

// Class - a description of a custom object
// you can only put functions in classes
class Dog {
  // this is a function that creators of JS reserved for every Class
  // to call a constructor, the creators of JS set it so u say Classname()
  // constructor is used to set properties on the object that will be created by the Class
  constructor(name, age, owner, location) {
    this.name = name;
    this.age = age;
    this.owner = owner;
    this.location = location;
  }

  bark() {
    console.log('OEIFJIEWJWIGMWRGK!!!!');
  }  
}

// To create a  new object with your Class, you need to
// call its constructor function by saying 'new Classname()'
const dog3 = new Dog('Scruffy', 3, 'Larry', 'BK');
const dog4 = new Dog('Danny', 5, 'Claire', 'MN');
const dog5 = new Dog('Cherry', 2, 'Jeff', 'FL');

console.log(dog3, dog4, dog5);

const person1 = {
  dad: 'Kent',
  mom: 'Christina',
};

console.log(person1);

class Person {
  constructor(dad, mom) {
    this.dad = dad;
    this.mom = mom;
  }
}

const personWithClass = new Person('Kent', 'Christina');
console.log(personWithClass);


// BONUS EXAMPLE
// Calling functions in the constructor
class AnnoyingPerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.announcePresence();
  }

  announcePresence() {
    console.log('Heyall!! ' + this.name + ' is in the buildin!!');
  }
}

// When the constructor is called, the object's announcePresence function is called
// Check out the console in the browser
const keith = new AnnoyingPerson('Keith', 23);
