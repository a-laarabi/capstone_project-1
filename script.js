// ##########  menu  ##########

const hamburger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const menuLink = document.querySelectorAll(".menu-link");

hamburger.addEventListener("click", () =>{
  hamburger.classList.add("active");
  menu.classList.add("active");
  // if (menu.classList.contains("active")) {
  //   menu.classList.remove("active");
  // }
})

menuLink.forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  menu.classList.remove("active");
}))

// hamburger.classList.contains("active")