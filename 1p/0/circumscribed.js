//RADIUS OF CIRCLE CIRCUMSCRIBRING A TRIANGLE OF SIDES
let r,
  s,
  a = 5,
  b = 9,
  c = 7;

s = 0.5 * (a + b + c);

cuadrado = s * (s - a) * (s - b) * (s - c);
den = 4 * Math.sqrt(cuadrado);

r = (a * b * c) / den;

console.log(r);
