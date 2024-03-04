// Hamburger (simple)
let hamburger = document.querySelector(".hamburger")
let nav = document.querySelector(".nav-menu")
hamburger.onclick = function () {
  nav.classList.toggle ("adapted-nav")
  hamburger.classList.toggle ("hamburger-open")
}

// // Hamburger
// let hamburger = document.querySelector(".hamburger");
// let nav = document.querySelector(".nav-menu");
// hamburger.addEventListener("click", (function () {
//    hamburger.classList.toggle("hamburger-open"),
//    hamburger.classList.contains("hamburger-open")
//    ? (nav.style.display = "block", nav.classList.add("adapted-nav"))
//    : (nav.style.display = "none", nav.removeAttribute("style"), nav.classList.remove("adapted-nav"))
// }));