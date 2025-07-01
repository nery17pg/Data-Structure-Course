let cont = 0; //Contador

let generateOne = (n) => Math.round(Math.random() * n); //Número aleatorio

//SENTENCIA COMPUESTA para generar un array de n tamaño con números random
let generateN = (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) arr.push(generateOne(n));
  return arr;
};

let array = generateN(100000); //Genero el array

this.bubbleSort = function () {
  let length = array.length; //{1}
  for (let i = 0; i < length; i++) {
    //{2}
    for (let j = 0; j < length - i - 1; j++) {
      //{3}
      if (array[j] > array[j + 1]) {
        //{4}
        cont++; //Incremento
        swap(array, j, j + 1); //{5}
      }
    }
  }
};

//Intercambio de valores
let swap = function (array, index1, index2) {
  let aux = array[index1];
  array[index1] = array[index2];
  array[index2] = aux;
};

console.time("Tiempo: ");
this.bubbleSort();
console.timeEnd("Tiempo: ");
console.log("Pasos: ", cont);
console.log("Elementos ordenados: ", array);
