const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toogle("active");
});

document.querySelectorAll(".menu-item").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    hamburger.classList.remove("active");
  })
);
