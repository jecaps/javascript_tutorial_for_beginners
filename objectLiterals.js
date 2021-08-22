// Object Literals

const person = {
  firstName: "John",
  lastName: "Smith",
  age: 30,
  pets: ["dogs", "cats"],
  address: {
    street: "123 Street",
    city: "Houston",
    state: "Texas",
  },
};

console.log(person.lastName); // accessing items in this array with dot notation

console.log(person["lastName"]); // accessing items in this array with bracket notation

let key = "firstName";

console.log(person[key]);

console.log(person.pets[1]); //accessing elements in the array within the object

console.log(person.address.state);

person.email = "john@email.com"; // adding another element in the object

console.log(person);

person.address.country = "United States of America"; // adding an element in the object within the object

console.log(person.address);

person.pets[2] = "fish"; // adding element in the array within the object

console.log(person.pets);

delete person.age; // deleting an element in the object

console.log(person);

console.log(person.address.city);

const people = [
  {
    firstName: "John",
    lastName: "Smith",
    age: 30,
    pets: ["dogs", "cats"],
    address: {
      street: "123 Street",
      city: "Houston",
      state: "Texas",
    },
  },
  {
    firstName: "Mary",
    lastName: "Smith",
    age: 30,
    pets: ["dogs", "cats"],
    address: {
      street: "123 Street",
      city: "Houston",
      state: "Texas",
    },
  },
];

const peopleJSON = JSON.stringify(people);

console.log(JSON.parse(peopleJSON));
