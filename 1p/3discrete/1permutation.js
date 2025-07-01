let P=0;
let n=3;
let m=3;

function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}

P=(factorialize(n))/(factorialize(n-m));
console.log("El resultado es: ", P);