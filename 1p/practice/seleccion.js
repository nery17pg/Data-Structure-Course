let cont = 0; //Contador

let generateOne = (n) => Math.round(Math.random() * n); //Número aleatorio

//SENTENCIA COMPUESTA para generar un array de n tamaño con números random
let generateN = (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) arr.push(generateOne(n));
  return arr;
};

let array = generateN(100000); //Genero el array

this.selectionSort = function () {
  let length = array.length, //{1}
    indexMin;
  for (let i = 0; i < length - 1; i++) { //{2}
    indexMin = i; //{3}
    for (let j = i; j < length; j++) { //{4}
      if (array[indexMin] > array[j]) { //{5}
        cont++; //Incremento
        indexMin = j; //{6}
      }
    }
    if (i !== indexMin) {//{7}
      cont++; //Incremento
      swap(array, i, indexMin);
    }
  }
};

//Intercambio de valores
let swap = function(array, index1, index2){
let aux = array[index1];
array[index1] = array[index2];
array[index2] = aux;
};

console.time("Tiempo: ");
this.selectionSort();
console.timeEnd("Tiempo: ");
console.log("Pasos: ", cont);
console.log("Elementos ordenados: ", array);
