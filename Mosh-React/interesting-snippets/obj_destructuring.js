//Maps

const colors = ["red", "green", "blue"];
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);

//object destructuring

const address = {
  street: "",
  city: "",
  country: ""
};

//const street = adress.street;
//const city = address.city;
//const country = address.country;
const { street, city, country } = address;
const { street: st } = address;

//spread operator

const first = [1, 2, 3];
const second = [4, 5, 6];

//const combined = first.concat(second);
//const combined = [...first,...second];

const clone = [...first];
console.log(first);
console.log(clone);

//Spread operator for objects:

const obj1 = { name: "Will" };
const obj2 = { job: "Programmer" };

const combined = { ...obj1, ...obj2, location: "Nashville" };
console.log(combined);

const clone2 = { ...obj1 };

