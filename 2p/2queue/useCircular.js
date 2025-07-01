import {Queue} from './circularQueue.js'

let q = new Queue(3);  

console.log(q.toString());

q.enqueue('a');

q.enqueue('b');

q.enqueue('c');
console.log(q.toString());

q.dequeue();  
console.log(q.toString()); 

q.enqueue('z'); 
console.log(q.toString());