function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.size = size;
  }
  
  function enqueue(element) {
    this.dataStore.push(element);
  }
  
  function dequeue() {
    return this.dataStore.shift();
  }
  
  function front() {
    return this.dataStore[0];
  }
  
  function back() {
    return this.dataStore[this.dataStore.length - 1];
  }
  function toString() {
    var retStr = "";
    for (let i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i] + "\n";
    }
    return retStr;
  }
  
  function empty() {
    if (this.dataStore.length == 0) {
      return true;
    } else {
      return false;
    }
  }
  
  function size() {
    return this.dataStore.length;
  }
  
  let q = new Queue();
  q.enqueue("Meredith");
  q.enqueue("Cynthia");
  q.enqueue("Jennifer");
  
  console.log(q.toString());
  console.log("Longitud de la cola: " + q.size());
  q.dequeue();
  console.log(q.toString());
  console.log("Front of queue: " + q.front());
  console.log("Back of queue: " + q.back());
  console.log("Longitud de la cola actualizada: " + q.size());