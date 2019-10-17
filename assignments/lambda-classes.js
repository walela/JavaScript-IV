// CODE here for your Lambda Classes
class Person {
  constructor(data) {
    this.name = data.name;
    this.age = data.age;
    this.location = data.location;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(data) {
    super(data);
    this.specialty = data.specialty;
    this.favLanguage = data.favLanguage;
    this.catchPhrase = data.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
    return `${student.name} receives a perfect score on ${subject}!`;
  }
}
let alex = new Instructor({
  name: "Alex",
  location: "London",
  age: 55,
  favLanguage: "JavaScript",
  specialty: "Frontend",
  catchPhrase: "I like steak."
});
console.log(alex);
alex.speak();
alex.demo("Prototypal Inheritance");

let josh = new Instructor({
  name: "Josh",
  location: "Napa Valley",
  age: 29,
  favLanguage: "Haskell",
  specialty: "React",
  catchPhrase: "This is awesome!"
});

console.log(josh);
josh.speak();

class Student extends Person {
  constructor(data) {
    super(data);
    this.className = data.className;
    this.favSubjects = data.favSubjects;
    this.previousBackground = data.previousBackground;
  }
  listSubjects() {
    console.log(`${this.name} favourite subjects: ${this.favSubjects}`);
    return `${this.name} favourite subjects: ${this.favSubjects}`;
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(data) {
    super(data);
    this.gradClassName = data.gradClassName;
    this.favInstructor = data.favInstructor;
  }
  standUp(channel) {
    console.log(
      `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    );
    return `${this.name} favourite subjects: ${this.favSubjects}`;
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

let petar = new ProjectManager({
  name: "Petar Vlaisavljevic",
  age: 22,
  location: "Barcelona",
  favLanguage: "Lisp",
  gradClassName: "FSW2",
  specialty: "React",
  catchPhrase: "This is so easy",
  favInstructor: josh
});

console.log(petar);
let isaac = new ProjectManager({
  name: "Isaac Aderogba",
  age: 23,
  location: "Dublin",
  gradClassName: "FSW2",
  favInstructor: josh,
  specialty: "JavaScript",
  catchPhrase: "Boooyaaah",
  favLanguage: "JavaScript"
});
console.log(isaac);
let austin = new Student({
  name: "Austin Walela",
  age: 25,
  location: "Nairobi",
  className: "JS-IV",
  favSubjects: ["JavaScript", "CS", "React"],
  previousBackground: "Lawyer"
});

console.log(austin);
austin.listSubjects();
austin.sprintChallenge("JavaScript");

let daisy = new Student({
  name: "Daisy Silako",
  age: 24,
  location: "Ghana",
  className: "JS-IV",
  favSubjects: ["JavaScript", "CSS", "Python"],
  previousBackground: "Student"
});

console.log(daisy);
daisy.PRAssignment("CSS Flexbox");
