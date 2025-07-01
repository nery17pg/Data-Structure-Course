import { Tree } from "./class.js";

//Crear el árbol
let tree = new Tree();

//Iniciar temporizador para todo el algoritmo
console.time("Tiempo total del algoritmo: ");

//Generar nodos aleatorios
tree.generate(100000);
//console.log(tree); // Mostrar el árbol completo

// Método inOrden
console.time("Tiempo para inOrder: ");
tree.inOrder(tree.root);
console.timeEnd("Tiempo para inOrder: ");

//Valores para tabla
console.log("Cantidad de pasos:", tree.steps);
console.timeEnd("Tiempo total del algoritmo: "); // Termina el temporizador

//Pruebas no necesitas, pero por si las dudas
/*
// Medir tiempo para preorden
console.time("Preorden");
tree.preOrder(tree.root);
console.timeEnd("Preorden");
*/
/*
// Medir tiempo para inorden
console.time("Inorden");
tree.inOrder(tree.root);
console.timeEnd("Inorden");
*/
/*
// Medir tiempo para posorden
console.time("Posorden");
tree.posOrder(tree.root);
console.timeEnd("Posorden");
*/

/*
//Operaciones secundarias
tree.add(50);
tree.add(30);
tree.add(70);
tree.add(20);
tree.add(40);
tree.add(60);
tree.add(80);

console.log("Buscar 40:", tree.search(40)); 
console.log("Máximo:", tree.max());
console.log("Mínimo:", tree.min()); 

tree.remove(30); 
console.log("Árbol después de eliminar 30:");
tree.inOrder(tree.root); 

tree.balance(); 
console.log("Árbol balanceado:");
tree.inOrder(tree.root); 
*/
