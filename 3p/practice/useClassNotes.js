import { Tree } from "./solutionNotes.js";

let arbol = new Tree();

//Inicialicé el temporizador
console.time("it took");
arbol.generate(10000);

//Aquí deja eso, vemos vemos si lo quitamos o neh
//let steps=arbol.traverseTree()

/*console.time('it took')
console.log('preOrder')
arbol.preOrder(arbol.root)
console.timeEnd('it took')*/

/*console.time('it took')
console.log('inOrder')
arbol.inOrder(arbol.root)
console.timeEnd('it took')*/

console.log("posOrder");  //Pues aquí estamos usando posOrder, pero puede cambiar, o sea, podemos poner más casos de uso
arbol.posOrder(arbol.root); //Recorrido del árbol

console.log(arbol); //Con esto mostramos todo el arbolito
console.timeEnd("it took"); //Termina el temporizador
