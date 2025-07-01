//factorial(n)

function factorial(n){
    if(n===1){  //Si n es igual a 0 o 1 regresará 1
      return 1;
    } else {
      return n * factorial(n-1);  //Comienza recursividad
    }
  }
  
  console.log(factorial(5));

/*En la línea 7 comienza la recursión hasta llegar al 1, que es donde se detiene.
De igual manera se debe de restar 1 porque ya tenemos a n que funciona como esa unidad
que estamos restando*/