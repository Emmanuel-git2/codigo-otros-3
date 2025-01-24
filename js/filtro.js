// Tenemos un li de productos
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "../img/zapato-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "../img/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "../img/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "../img/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "../img/zapato-rojo.jpg"},
];

// pone dos veces lista de productos, dejo la del id porque su atributo no es "name"
const li = document.getElementById("lista-de-productos");
//quito esta linea porque no hay ninguna clase "input"
//Agrego correctamente el id del input
const $i = document.getElementById("filtro-input");

for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div")
  d.classList.add("producto")

  var ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)
}

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  //DEFINO que productos es un array
  const productosFiltrados = Array.isArray(productos) ? filtrado(productos, texto) : [];

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  