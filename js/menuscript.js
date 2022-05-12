const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

document.querySelectorAll(".menu-item").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    hamburger.classList.remove("active");
  })
);
