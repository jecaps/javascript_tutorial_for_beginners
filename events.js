// Events

// const btn = document.getElementById("myBtn");
// btn.addEventListener("click", (e) => {
//   console.log(e);
// });

// button turns blue when you hover on it

// const btn = document.getElementById("myBtn");
// btn.addEventListener("mouseover", (e) => {
//   btn.style.background = "blue";
//   console.log(e);
// });

// button turns blue after hovering on it

const btn = document.getElementById("myBtn");
btn.addEventListener("mouseout", (e) => {
  btn.style.background = "blue";
  console.log(e);
});
