// DOM - Document Object Model

// const list = document.getElementById("list");
// console.log(list);

// Single Element Selectors

// const list = document.querySelector("#list");
// console.log(list);

// const listItems = document.querySelector(".list-item");
// console.log(listItems);

// Multiple Element Selectors

const listItems = document.querySelectorAll(".list-item");

// listItems.forEach((item) => console.log(item.textContent));

// list.firstElementChild.remove(); // remove first element

// list.lastElementChild.remove(); // remove last element

list.firstElementChild.textContent = "New Item"; // change first element of the list
