//selectores
const nombre = document.querySelector(".nombre");
const fecha = document.querySelector(".fecha");
const numero = document.querySelector(".numero");
const boton = document.querySelector(".boton");
const contenedor = document.querySelector(".contenedor");
const tabla = document.querySelector(".tabla");
const form = document.querySelector("form");

//eventos
boton.addEventListener("click", ingresar);
tabla.addEventListener("click", borrar);

//funciones
function pruebaData (event) {
    event.preventDefault();
    const dataDoc = document.createElement("h2");
    dataDoc.classList.add("dataParrafo");
    dataDoc.innerText = nombre.value + " " + fecha.value + " " + numero.value;
    console.log(dataDoc.innerText);
}

function ingresar(event){
    event.preventDefault();
    //agrego un tr
    const trDoc = document.createElement("tr");
    trDoc.classList.add("fila");
    tabla.appendChild(trDoc);
    //nombre
    const nombreDoc = document.createElement("td");
    nombreDoc.classList.add("nombreLista");
    trDoc.appendChild(nombreDoc);
    nombreDoc.innerText = nombre.value;
    //fecha
    const fechaDoc = document.createElement("td");
    fechaDoc.classList.add("fechaLista");
    trDoc.appendChild(fechaDoc);
    fechaDoc.innerText = fecha.value;
    //numero
    const numeroDoc = document.createElement("td");
    numeroDoc.classList.add("numeroLista");
    trDoc.appendChild(numeroDoc);
    numeroDoc.innerText = numero.value;
    //boton para eliminar
    const botonDoc = document.createElement("button");
    botonDoc.classList.add("botonLista");
    trDoc.appendChild(botonDoc);
    botonDoc.innerText= "X";
    //borro data de las barritas
    nombre.value = "";
    fecha.value = "";
    numero.value = "";
}

function borrar(e){
    const item = e.target;
    if (item.classList[0]=== "botonLista"){
        const fila = item.parentElement;
        fila.remove();
    }
}