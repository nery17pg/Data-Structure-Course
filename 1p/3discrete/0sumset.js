//SOLUCIÓN PARA EDABIT
function getSubsets(arr, num) {
    let conjuntos = todosConjuntos(arr);
    let guarida = [];
  
    for (let i = 0; i < conjuntos.length; i++) {
      let suma = 0;
      for (let j = 0; j < conjuntos[i].length; j++) {
        suma += conjuntos[i][j];
      }
      if (suma === num) {
        guarida.push(conjuntos[i]);
      }
    }
  
    return guarida.sort(comparar);
  }
  
  function todosConjuntos(arr) {
    let conjuntos = [[]];
  
    for (let i = 0; i < arr.length; i++) {
      let tamaño = conjuntos.length;
      for (let j = 0; j < tamaño; j++) {
        let nuevo = [];
        for (let k = 0; k < conjuntos[j].length; k++) {
          nuevo.push(conjuntos[j][k]);
        }
        nuevo.push(arr[i]);
        conjuntos.push(nuevo);
      }
    }
  
    return conjuntos;
  }
  
  function comparar(n1, n2) {
    if (n1.length === n2.length) {
      for (let i = 0; i < n1.length; i++) {
        if (n1[i] !== n2[i]) {
          return n1[i] - n2[i];
        }
      }
      return 0;
    } else {
      return n1.length - n2.length;
    }
  }
  
  console.log(getSubsets([0, 1, 2, 3, 4, 5], 4));