/*HOMEWORK
HACER UN PROGRAMA QUE VAYA HACIENDO DIVISIONES HASTA QUE LLEGUE A 1 Y QUE ME DIGA CUÁNTAS VECES CONTÓ*/

let n=1000000;
let cont=0;

do{
  if(n!==1)
    n/=2;
  cont++;
}
  while(n>1)

console.log(cont);
