const toggleButton = document.querySelector(".toggle-bar");
const navbar = document.querySelector(".nav-elements");
toggleButton.addEventListener("click", () => {
  navbar.classList.toggle("active");
  toggleButton.classList.toggle("active");
});
