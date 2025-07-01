import { Linked } from "../../ncpg/linked/Linked.js";
import { Node } from "../../ncpg/linked/Node.js";

//Generamos los números aleatoriamente
let l = new Linked(new Node(Math.floor(Math.random() * 100)));

for (let i = 0; i < 9; i++) {
  //Añadimos los nodos
  l.append(new Node(Math.floor(Math.random() * 100)));
}

// Antes de ordenar
console.log("Lista antes de ordenar:");
l.traverse();

// Lista ordenada
l.sort();
console.log("Lista después de ordenar:");
l.traverse();

// Verificando que el número está en la lista
l.contains(39);

// Agregando un nodo después de un número
let newNode = new Node(200); // Nodo a agregar
l.addAfter(10, newNode); // Cambiar 10 por un valor que ya existe en la lista
l.traverse(); // Lista actualizada y ordenada