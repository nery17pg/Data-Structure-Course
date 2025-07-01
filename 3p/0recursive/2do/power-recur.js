//Potencia
function power(base, exponente){
    if(exponente===0){
      return 1;  //Cualquier número elevado a la 0 es igual a 1
    } else {
      //Empieza la recursividad
      return base*power(base, exponente-1);
    }
  }
  
  console.log(power(2,3));

/*En la línea 7 lo hacemos de esa manera debido a que regresamos la base
(en este caso 2) y la multiplicamos por la función power, pero al exponente
le restamos 1, esto porque la base que estamos multiplicando al inicio 
es la que representa ese 1. 

Entonces, lo podemos entender como:
  return 2*power(2,3-1), que vendría siendo igual a 2*power(2,2)
  Eso nos daría como resultado 2*(2^2)=8 */