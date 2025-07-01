export function factorial(i) {
    let n = 1;
    for (let j = 1; j < i; j++) {
      n *= j;
    }
    return n;
  }
  