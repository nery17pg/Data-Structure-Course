let arr = [3, 7, 5, 1, 2];
let n = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] <= n) {
    n = arr[i];
  }
}
console.log(n);
