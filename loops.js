// While Loop

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++; // increment 1
// }

// // For Loop

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

const people = [
  {
    firstName: "John",
    lastName: "Smith",
    age: 30,
    city: "Hamburg",
  },
  {
    firstName: "Mary",
    lastName: "Jones",
    age: 28,
    city: "Berlin",
  },
  {
    firstName: "Jerika",
    lastName: "Kanz",
    age: 27,
    city: "Hamburg",
  },
  {
    firstName: "Jose",
    lastName: "Diaz",
    age: 23,
    city: "Frankfurt",
  },
  {
    firstName: "Helena",
    lastName: "Marquez",
    age: 32,
    city: "Hamburg",
  },
];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }

// Same approach using while loop

// let i = 0;
// while (i < people.length) {
//   console.log(people[i].firstName);
//   i++; // increment 1
// }

// for (let person of people) {
//   console.log(person.firstName);
// }

// another way of writing a for loop

// people.forEach(function (person) {
//   console.log(person);
// });

// // or

// people.forEach((person) => console.log(person.firstName));

const personName = people.map((person) => person.firstName);

console.log(personName);

const personAgeUnder30 = people.filter((person) => person.age < 30);

console.log(personAgeUnder30);

// Last Name of people under 30

const lastNameUnder30 = people
  .filter((person) => person.age < 30)
  .map((person) => person.lastName);

console.log(lastNameUnder30);

// Name of people under 25

const personAgeUnder25 = people
  .filter((person) => person.age < 25)
  .map((person) => person.firstName);

console.log(personAgeUnder25);

// Name of people over 30

const personOver30 = people
  .filter((person) => person.age > 30)
  .map((person) => person.lastName + ", " + person.firstName);

console.log(personOver30);

// Name of people living in Hamburg

const livingInHamburg = people
  .filter((person) => person.city == "Hamburg")
  .map((person) => person.firstName + " " + person.lastName);

console.log(livingInHamburg);
