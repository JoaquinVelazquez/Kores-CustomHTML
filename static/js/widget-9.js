let flechaProductos = document.querySelector('.flecha-productos');
let subMenuProductos = document.querySelector('.subcategoria-mobile');

flechaProductos.addEventListener('click', function() {
    subMenuProductos.classList.toggle('invisible');
    flechaProductos.classList.toggle('rotar');
});