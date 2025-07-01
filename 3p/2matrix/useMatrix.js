import { Matrix } from "../../ncpg/Matrix.js";

//Método ones
let matrix1 = new Matrix(3, 4); 
console.log("Matriz con unos: ");
console.log(matrix1.ones());

//Método ones con print
let matrix1p = new Matrix(3, 4); 
matrix1p.ones();
console.log("Matriz con unos (usando print): ");
matrix1p.print();

//Método zeroes
let matrix2 = new Matrix(3, 3);
console.log("Matriz con ceros: ");
console.log(matrix2.zeroes());

//Método zeroes con print
let matrix2p = new Matrix(3, 3); 
matrix2p.zeroes();
console.log("Matriz con ceros (usando print): ");
matrix2p.print();

//Método random
let matrix3 = new Matrix(3, 3);
console.log("Matriz con números aleatorios: ");
console.log(matrix3.random(0, 10)); 

//Método random con print
let matrix3p = new Matrix(3, 3); 
matrix3p.random();
console.log("Matriz con números aleatorios (usando print): ");
matrix3p.print();

//Método isSymmetric
let matrix4 = new Matrix(3, 3);
matrix4.random(0, 1);
console.log("¿Es simétrica? ");
console.log(matrix4.isSymmetric()); 

//Método print
console.log("Matriz con print: ");
matrix4.print();

//Método isSquared
let matrix5 = new Matrix(3, 4);
console.log("¿Es cuadrada? ");
console.log(matrix5.isSquared());