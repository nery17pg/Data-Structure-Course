import {Queue} from './circularQUEUE.js'

let q = new Queue();

console.log(q.toString());

q.dequeue();
console.log(q.toString());
q.dequeue('x');
console.log(q.toString());
q.dequeue('y');
console.log(q.toString());
