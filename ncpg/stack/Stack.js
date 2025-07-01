//EXPORT
//LA SALIDA ME TIENE QUE LLEGAR A UN LÍMITE Y TENGO QUE AGREGAR LOS FUNCTION DE ISEMPTY Y ISFULL
export function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
    this.isEmpty= isEmpty;
    this.isFull= isFull;
  }
  
  function push(element) {
    if (this.isFull()) {
      console.log("La pila está llena");
      return;
    }
    this.dataStore[this.top++] = element;
  }
  
  function peek() {
    if (this.isEmpty()) {
      console.log("La pila está vacía");
      return;
    }
    return this.dataStore[this.top - 1];
  }
  
  function pop() {
    if (this.isEmpty()) {
      console.log("La pila está vacía");
      return;
    }
    return this.dataStore[--this.top];
  }
  
  function isEmpty() {
    return this.top === 0;
  }
  
  function isFull() {
    return this.top === this.limit;
  }
  
  function length() {
    return this.top;
  }
  
  function clear() {
    this.top = 0;
  }