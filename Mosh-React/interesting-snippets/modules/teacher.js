

import { Person } from './person';

const person = new Person("Rachel", "Special Education");

export class Teacher extends Person {
    constructor(name,degree) {
      super(name);
      this.degree = degree;
    }
    teach() {
      console.log("teach");
    }
  }

  
  