let lim=1;

let factorial = (lim) => {
    let fact =1;
    for(let i=2;i<=lim;i++)
        fact*=i;
        return fact;
}

let permutacion=(n,m)=>factorial(n)/(factorial(n-m));

for(let j=1;j<22;j++)
console.log(permutacion(21,j));