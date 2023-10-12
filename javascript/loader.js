const loader = document.querySelector("#loading");
const container = document.querySelector(".container") 
const hero = document.querySelector(".hero")
const contactHero = document.querySelector(".contact-hero")
let load = 0;
setInterval(function () {
    loader.textContent = `${load} %`;
    if (load < 100) {
        load++;
        contactHero.classList.add("none")



    } else {
        setTimeout(function () {
            container.classList.add("none");
            hero.classList.remove("none");

        }, 2000)
    }
}, 100)