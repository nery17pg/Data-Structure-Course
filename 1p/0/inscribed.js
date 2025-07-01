//RADIUS OF CIRCLE INSCRIBED IN A TRAINGLE OF SIDES abc
let r,
  s,
  a = 5,
  b = 9,
  c = 7;

s = 0.5 * (a + b + c);

cuadrado = s * (s - a) * (s - b) * (s - c);
r = Math.sqrt(cuadrado) / s;

console.log(r);
