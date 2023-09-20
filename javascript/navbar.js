const navbar = document.querySelectorAll(".navbar-item")

navbar.addEventListener("click", () => {
    navbar.className.add("active");
})