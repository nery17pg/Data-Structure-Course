import { mGraph } from "../../ncpg/graph/mGraph.js";

//test all the methods of the class mGraph
//PRUEBAS CON MATRIZ CUADRADA
let graph1 = new mGraph([
  [0, 1, 0, 0],  
  [1, 0, 1, 0],  
  [0, 1, 0, 1],  
  [0, 0, 1, 0]   
]);

//Matriz inicialdel grafo
console.log("Matriz inicial del grafo:");
graph1.printGraphAsMatrix();  

//Agregar vértice 4 (addVertex)
graph1.addVertex(4);
graph1.matrix.push([0, 0, 0, 0, 0]);  
for (let i = 0; i < graph1.matrix.length; i++) {
  graph1.matrix[i].push(0);  
}
console.log("Matriz después de agregar el vértice 4: ");
graph1.printGraphAsMatrix();

//Agregar arista (addEdge)
graph1.addEdge(0, 3, 1);
console.log("Matriz al agregar una arista entre 0 y 3: ");
graph1.printGraphAsMatrix();

//Método degree
console.log("Grado del vértice 0:", graph1.degree(0));  

//Método totalDegree
console.log("Grado total del grafo:", graph1.totalDegree());

// Eliminar una arista (removeEdge))
graph1.removeEdge(1, 2);
console.log("Matriz al eliminar la arista entre 1 y 2:");
graph1.printGraphAsMatrix(); 

//Método isDigraph
console.log("¿Es un digrafo?", graph1.isDigraph()); 

//Método isWeigthed
console.log("¿Es un grafo con peso?", graph1.isWeighted());  

//Método isComplete
console.log("¿Es un grafo completo?", graph1.isComplete());  

//Método isTree
console.log("¿Es un árbol?", graph1.isTree());  

// Eliminar un vértice (removeVertex)
graph1.removeVertex(4);
console.log("Matriz después de eliminar el vértice 4:");
graph1.printGraphAsMatrix();  

//Método isTree
console.log("¿Es un árbol después de eliminar un vértice?", graph1.isTree()); 