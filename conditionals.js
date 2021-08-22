// Conditionals

let age = 25;

// 20-35yrs old

if (age >= 20 && age <= 35) {
  console.log(true);
} else {
  console.log(false);
}

// 12 and below are too young
// 13-19 teenager
// 20 and above are grown ups

if (age > 12 && age <= 19) {
  console.log("You're a teenager!");
} else if (age > 19) {
  console.log("You're a grown-up now!");
} else {
  console.log("You're too young!");
}

let a = 1;
let b = 2;

// function evaluate() {
//   if (a < b) {
//     return true;
//   } else {
//     return false;
//   }
// }

// shorter way to write an if statement

function evaluate() {
  return a > b;
}

console.log(evaluate());

let animal = "cat";

const likesCats = animal === "cat" ? true : false;

console.log(likesCats);

let pet = "crocodile";
switch (pet) {
  case "fish":
    console.log("Hey fishy fishy");
    break;
  case "cat":
    console.log("Hey kitty kitty");
    break;
  default:
    console.log("Not a pet");
    break;
}
