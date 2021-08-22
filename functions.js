function hello(name) {
  console.log("Hello " + name);
}

hello("John");

function helloThere(firstName, lastName) {
  console.log(`Hello there ${firstName} ${lastName}`);
}

helloThere("John", "Smith");

// function convertPercentage(num) {
//   return num / 100;
// }

// console.log(convertPercentage(40));

const convertPercentage = (num) => num / 100; // Arrow function works the same way as above

console.log(convertPercentage(40));
