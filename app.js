// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

var listaAmigos = [];

function agregarAmigo(){

    var nombre = document.getElementById('amigo').value;
    console.log(nombre);
    listaAmigos.push(nombre)
    console.log(listaAmigos);

    
    let lista = document.getElementById("listaAmigos");

    if (nombre != "") {                         // Si el nombre no está vacío
        let li = document.createElement("li");  // Creamos un nuevo <li>
        li.innerText = nombre;                  // Asignamos el nombre leído al <li>
        lista.appendChild(li);                  // Agregamos el <li> a la lista <ul>
    }

    document.getElementById('amigo').value = ""; // Limpiamos el input

}

function sortearAmigo(){

    let resultado = document.getElementById("resultado");

    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)]; //Amigo Sorteado

    if (amigoSorteado != "") {                         // Si el nombre no está vacío
        let li = document.createElement("li");  // Creamos un nuevo <li>
        li.innerText = amigoSorteado;                  // Asignamos el nombre leído al <li>
        resultado.appendChild(li);                  // Agregamos el <li> a la lista <ul>
    }
}