//import will not work yet in JS, need to find another 
//solution

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

  export { Teacher }
  