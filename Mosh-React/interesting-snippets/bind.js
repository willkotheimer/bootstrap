const person = {
  name: "Mosh",
  walk() {
    console.log(this);
  }
};

person.walk();

//this is scoped so walk outsite of person refers to window object
//bind returns instance of the argument passed to it
const walk = person.walk.bind(person);

walk();
