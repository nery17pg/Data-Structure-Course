//recursive vs countDownToZero.js

function countDownToZero(n){
    if(n<1){ //Caso base
      return
    } else{
      console.log(n)
      countDownToZero(n-1) //Llamada recursiva
    }
  }
  
  countDownToZero(5)