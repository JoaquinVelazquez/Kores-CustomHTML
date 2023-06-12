const URLactual = window.location.pathname;
// const instagram = document.querySelector(".instagram-contenedor");
// const informacion = document.querySelector(".informacion-contenedor");
// const newsletter = document.querySelector(".banner-newsletter");
const instagramParent = document.getElementById('instagram-parent')

if (URLactual == "/") {
    // instagram.classList.remove("invisible");
    // informacion.classList.toggle("invisible");
    // newsletter.classList.toggle("invisible");

    let instagram = document.createElement('div')
    instagram.classList = 'instagram-contenedor'
    instagram.innerHTML = `<div class="instagram-contenedor"><div class="texto"><p>Síguenos en instagram</p><p><a href="https://www.instagram.com/koresmex/" target="_blank">instagram.com/koresmex</a></p></div><div class="fotos-contenedor"><div class="fotos-uno"><a href="https://www.instagram.com/koresmex/" target="_blank"><img class="foto-chica" src="https://iili.io/iDgN2f.jpg" alt=""></a><a href="https://www.instagram.com/koresmex/" target="_blank"><img class="foto-chica" src="https://iili.io/iDgjrG.jpg" alt=""></a></div><div class="fotos-dos"><a href="https://www.instagram.com/koresmex/" target="_blank"><img class="foto-chica" src="https://iili.io/iDgXBn.jpg" alt=""></a><a href="https://www.instagram.com/koresmex/" target="_blank"><img class="foto-chica" src="https://iili.io/iDgVLX.jpg" alt=""></a></div></div></div>`

    instagramParent.appendChild(instagram)
}


console.log(6)

