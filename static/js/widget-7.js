let productos = document.querySelector(".productos-menu");

let submenu = document.querySelector(".submenu-categorias");

let tiposProductos = document.querySelector(".tipos-de-productos");
let tiposProductosSubmenu = document.querySelector(".seleccion-productos");

let Categorias = document.querySelector(".categorias-select");
let categoriasSubmenu = document.querySelector(".seleccion-categorias");

let submenuCategorias = document.querySelector(".submenu-categorias");

productos.addEventListener('mouseenter', function(){
    submenuCategorias.classList.toggle("invisible");
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

submenu.addEventListener('mouseleave', function(){
    submenuCategorias.classList.toggle("invisible");
})

Categorias.addEventListener('click', function(){
    categoriasSubmenu.classList.remove("invisible");
    tiposProductosSubmenu.classList.add("invisible");
})

tiposProductos.addEventListener('click', function(){
    categoriasSubmenu.classList.add("invisible");
    tiposProductosSubmenu.classList.remove("invisible");
})

console.log(7)

