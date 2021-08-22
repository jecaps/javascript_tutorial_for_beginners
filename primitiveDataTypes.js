let name = "John"; //String Literal
let age = 30; // Number Literal
let lovesCats = true; //Boolean Literal
let color = null; // Null
let list; //Undefined

name += " Smith"; // Adding two strings
console.log(name);

// let message = name + " is " + age;
let message = `${name} is ${age}`; // use back ticks to use both '' "" in a string
console.log(message);

age /= 3;
console.log(age);
