let n = [4, 3, 6, 7];
let m = [4, 3, 6, 4];
let k = 0;

//g es el parámetro que recibe
let hasDuplicates = (g) => {
  for (let i = 0; i < g.length; i++) {
    for (let j = i + 1; j < g.length; j++) {
      k++;
      if (g[i] === g[j]) {
        return true;
      }
    }
  }
  return false;
};

hasDuplicates(n); //false
hasDuplicates(m); //true

console.log("Steps: ", k);
console.log(hasDuplicates(n));
console.log(hasDuplicates(m));
