let C=0;
let n=9;
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

C=factorialize(n)/((factorialize(n-m))*(factorialize(m)));
console.log("El resultado es: ", C);

