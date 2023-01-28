const colors = [
  "#1C8D73",
  "#02B290",
  "#EDBF69",
  "#FF6263",
  "#207398",
  "#242B2E",
  "#FF6666",
  "#6A1B4D",
  "#BA68C8",
  "#26C6DA",
  "#26A69A",
];

let container = document.querySelector(".container");
const button = document.querySelector(".btn");

button.addEventListener("click", (e) => {
  container.style.backgroundColor = `${
    colors[Math.floor(Math.random() * colors.length)]
  }`;
});
