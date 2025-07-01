//URL
//https://edabit.com/challenge/EcEN8FnruPEj6x5k4

//CODE
function Josephus(personas, paso) {
    let soldados = [];
    for (let i = 1; i <= personas; i++) {
      soldados.push(i);
    }
  
    let eliminar = 0; 
  
    let restantes = personas;
    while (restantes > 1) {
  
      let cuenta = 0;
      while (cuenta < paso) {
        if (soldados[eliminar] !== null) {
          cuenta++; 
        }
        if (cuenta < paso) {
          eliminar = (eliminar + 1) % personas;
        }
      }
  
      soldados[eliminar] = null;
      restantes--;  
  
      eliminar = (eliminar + 1) % personas;
      while (soldados[eliminar] === null) {
        eliminar = (eliminar + 1) % personas;
      }
    }
  
    for (let i = 0; i < soldados.length; i++) {
      if (soldados[i] !== null) {
        return soldados[i]; 
      }
    }
  }
  
  console.log(Josephus(41, 3)); 
  console.log(Josephus(14, 2)); 
  console.log(Josephus(35, 11)); 
  console.log(Josephus(20, 1));  
  console.log(Josephus(15, 15)); 