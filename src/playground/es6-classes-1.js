class Person {
  //ES6 arrow function expression syntax
  //set default value using = 
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    //return 'Hi. I am ' + this.name + '!';
    //ES6 template string
    //can inject value inside the string
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

//subclass using extends
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    //!!'string' -> true
    //!!undefined -> false
    return !!this.major;
  }
  getDescription() {
    //access parent's getDescription
    let description = super.getDescription();
    
    if(this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }
    return description;
  }
}

//------------------------------------------------------
class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if(this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}.`;
    }
    return greeting;
  }
}

const me = new Traveler('Nan', 21, 'NYC');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());