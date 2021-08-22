// Array Literals

const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers[2]); // calling index 2 in Array

numbers[2] = 9; // changing value of index 2

console.log(numbers);

const colors = ["red", "blue", "green", "yellow"];

colors[4] = "black"; //Adding element in array

console.log(colors);

colors.push(30); //Pushing element into the list; Can be any data type

console.log(colors);

console.log(colors.indexOf("black"));

let lastColor = colors.pop(); //Removing last item of the list and assingning it in a new variable

console.log(lastColor);

let firstColor = colors.shift(); //Remióving first item of the list and assigning it in a new variable

console.log(firstColor);

console.log(colors);

const myArray = ["red", 4, true, null, [1, 2, 3]]; //Array with different data types; an array within an array

console.log(myArray);

console.log(myArray[4][1]); //Access items from the array within the array
