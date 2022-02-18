
var reloj;

function getData(){
let nombre = localStorage.getItem("nombre");
let imagen = localStorage.getItem("imagen");
let precio = localStorage.getItem("precio");
let descripcion = localStorage.getItem("descripcion");
let cantidad = localStorage.getItem("cantidad");

var reloj = {
    nombre:nombre,
    imagen: imagen,
    precio: precio,
    descripcion: descripcion,
    cantidad: cantidad,
}
localStorage.clear()

document.addEventListener("img").src = reloj.imagen
document.addEventListener("nombre").innerText = reloj.nombre
document.addEventListener("cantidad").innerText = reloj.cantidad
document.addEventListener("precio").innerText = reloj.precio
document.addEventListener("descriocion").innerText = reloj.descripcion
}

getData()

