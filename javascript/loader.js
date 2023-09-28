const loader = document.querySelector("#loading");
const container = document.querySelector(".container") 
const hero = document.querySelector(".hero")
let load = 0;
setInterval(function () {
    loader.textContent = `${load} %`;
    if (load < 100) {
        load++;


    } else {
        setTimeout(function () {
            container.classList.add("none");
            hero.classList.remove("none");

        }, 2000)
    }
}, 100)