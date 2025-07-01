//Fibonacci - lista completa

function listaCompleta(n) {  //Función para obtener la lista completa
    function fibonacci(n) {  //Función para calcular un solo elemento de fibonacci siguiendo el parámetro n
      if (n === 0) {  //0=0 en fibonacci
        return 0;
      } else if (n === 1) {  //1=1 en fibonacci
        return 1;
      } else {  
        return fibonacci(n - 1) + fibonacci(n - 2); //Comienza recursión
      }
    }
  
    let array = [];  //Array donde se van a almacenar los elementos de la lista
    for(let i=0; i<=n; i++){  //Se itera desde 0 hasta el límite (n). i toma el valor del índice actual en cada iteración
      array.push(fibonacci(i));  //Añade el elemento al final de la lista
    }
  
    return array;  //Regresamos el array completo
  }
  
  console.log(listaCompleta(6));
  