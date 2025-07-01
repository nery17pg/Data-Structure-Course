let generateOne = (n) => Math.round(Math.random()*n)

//SENTENCIA COMPUESTA
let generateN = (n) => {
  let arr = []
  for(let i=0; i<n; i++) arr.push(generateOne(n))
  return arr
}

console.log(generateN(10))