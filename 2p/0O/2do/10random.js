let generateOne = (n) => Math.round(Math.random()*n)

//SENTENCIA COMPUESTA
let generateN = (n) => {
  let number = 0;
  let randNum = {};
  for(let i=0; i<n; i++){
    number = generateOne(10);
    randNum[i+1] = number;
  }
  return randNum;
}

console.log(generateN(10))