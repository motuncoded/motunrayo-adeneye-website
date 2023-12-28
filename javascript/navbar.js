const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navigation.classList.toggle("active");
}
function closeMenu() {
  hamburger.classList.remove("active");
  navigation.classList.remove("active");
}
