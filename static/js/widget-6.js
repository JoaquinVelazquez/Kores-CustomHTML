const URLactual = window.location.pathname;
const instagram = document.querySelector(".instagram-contenedor");
// const informacion = document.querySelector(".informacion-contenedor");
// const newsletter = document.querySelector(".banner-newsletter");

if (URLactual == "/") {
    instagram.classList.remove("invisible");
    // informacion.classList.toggle("invisible");
    // newsletter.classList.toggle("invisible");
}
