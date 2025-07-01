let steps = [];
let seconds = [];

function Queue(maximum) {
  this.datastore = [];
  this.max = maximum;
  this.full = full;
  this.empty = empty;
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.display = display;
  this.front = front;
}

function enqueue(element) {
  if (this.full()) {
    console.log("La fila está llena");
  } else {
    this.datastore.push(element);
  }
}

function dequeue() {
  if (this.empty()) {
    console.log("La fila está vacía");
  }
  else {
    return this.datastore.shift();
  }
}

function full() {
  if (this.datastore.length === this.max){
    return true;
  }
  else {
    return false;
  }
}

function empty() {
  if (this.datastore.length === 0){
    return true;
  }
  else {
    return false;
  } 
}

function display() {
  let show = "";
  for (let i = 0; i < this.datastore.length; ++i) {
    show += this.datastore[i] + ", ";
  }
  return show;
}

function front() {
  return this.datastore[0];
}

function ordenar(x) {
  let cont = 0;
  for (let j = 1; j <= 1; j++) {
    console.time("Tiempo: "); 
    let mainQ = new Queue(x);
    let auxQ = new Queue(x);
    let randomNum, randomNew;
    let i = 1;
    randomNum = Math.floor(Math.random() * (x - 1) + 1);
    mainQ.enqueue(randomNum);
    while (i < x) {
      randomNew = Math.floor(Math.random() * (x - 1) + 1);
      while (mainQ.empty() != true) {
        auxQ.enqueue(mainQ.dequeue());
        cont++;
      }
      while (randomNew > auxQ.front()) {
        mainQ.enqueue(auxQ.dequeue());
        cont++;
      }
      if (auxQ.empty()) {
        mainQ.enqueue(randomNew);
        cont++;
      }
      if (randomNew <= auxQ.front()) {
        mainQ.enqueue(randomNew);
        cont++;
      }
      while (auxQ.empty() != true) {
        mainQ.enqueue(auxQ.dequeue());
      }
      i++;
    }
    steps[j - 1] = cont;
    console.log(mainQ.display());
    console.log("Pasos: " + cont);
    cont = 0;
  }
}

ordenar(10000);
console.timeEnd("Tiempo: ");
