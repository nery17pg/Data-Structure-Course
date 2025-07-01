export function Queue(maxSize = 5) {  
    this.dataStore = new Array(maxSize);  
    this.front = 0;  
    this.back = 0;    
    this.cont = 0;    
    this.maxQueue = maxSize;  
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.size = size;
    this.isEmpty = isEmpty;
    this.isFull = isFull;
    this.toString = toString;
}

function enqueue(element) {
    if (!this.isFull()) {
        this.dataStore[this.back] = element; 
        this.back = (this.back + 1) % this.maxQueue;
        this.cont++;  
    } else {
        console.log("La cola está llena, no se puede agregar el elemento.");
    }
}

function dequeue() {
    if (!this.isEmpty()) {
        let element = this.dataStore[this.front]; 
        this.dataStore[this.front] = undefined;  
        this.front = (this.front + 1) % this.maxQueue;  
        this.cont--;  
        return element;
    } else {
        console.log("La cola está vacía");
        return undefined;
    }
}

function isEmpty() {
    return this.cont === 0; 
}

function isFull() {
    return this.cont === this.maxQueue;  
}

function size() {
    return this.cont; 
}

function toString() {
    return {
        Cola: this.dataStore,
        Estado: this.isFull(),  
        Tamano: this.size(),    
        Front: this.front,      
        Back: this.back         
    };
}
