let P=0;
let n=0;
let m=0;

function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}

P=(n,m)=>factorialize(n)/(factorialize(n-m));

for(let i=1;i<22;i++)
console.log(P(21,i));