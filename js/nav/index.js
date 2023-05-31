const nav_hamburger = document.querySelector(".nav_hamburger");
const nav_links = document.querySelector(".nav_links");
let is_open = false;

const toggle_nav_hamburger = () => {
    if (is_open) {
        nav_links.classList.remove("open");
        nav_hamburger.classList.remove("open");
    } else {
        nav_links.classList.add("open");
        nav_hamburger.classList.add("open");
    };

    is_open = !is_open;
};

nav_hamburger.addEventListener("click", toggle_nav_hamburger);