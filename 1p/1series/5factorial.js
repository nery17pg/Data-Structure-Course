//SERIE HASTA EL 10
let n = 1;
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j < i; j++) {
    n = n + n * j;
  }
  console.log(n);

  n = 1;
}
