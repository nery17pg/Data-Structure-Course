//SUCESIÓN DEL 1 AL 10
let array = [0, 1];
let add = 0;

for (let j = 1; j <= 10; j++) {
  add = array[j] + array[j - 1];
  array.push(add);
  console.log(array[j - 1]);
}
