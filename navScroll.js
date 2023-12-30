const primaryHeader = document.querySelector(".primary-header");
const scrollWatch = document.createElement("div");

scrollWatch.setAttribute("data-scroll-watch", "");
primaryHeader.before(scrollWatch);
const navObserver = new IntersectionObserver((entries) => {
  primaryHeader.classList.toggle("sticking");
});
navObserver.observe(scrollWatch);
