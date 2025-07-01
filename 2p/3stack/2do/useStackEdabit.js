//URL
//https://edabit.com/challenge/WyuiphFcBXZSoKpEt

//CODE
function Stack() {
    this.dataStore = [];
    this.top = 0;
  
    this.sum = function() {
      const [a, b] = [this.pop(), this.pop()];
      if (a !== undefined && b !== undefined) {
        this.psh(a + b);
      }
    };
  
    this.rest = function() {
      const [a, b] = [this.pop(), this.pop()];
      if (a !== undefined && b !== undefined) {
        this.psh(a - b);
      }
    };
  
    this.mult = function() {
      const [a, b] = [this.pop(), this.pop()];
      if (a !== undefined && b !== undefined) {
        this.psh(a * b);
      }
    };
  
    this.div = function() {
      const [a, b] = [this.pop(), this.pop()];
      if (a !== undefined && b !== undefined) {
        this.psh(a / b);
      }
    };
  
    this.dup = function() {
      if (this.top > 0) {
        this.psh(this.dataStore[this.top - 1]);
      }
    };
  
    this.pop = function() {
      if (this.top > 0) {
        this.top--;
        return this.dataStore.pop();
      }
    };
  
    this.psh = function(value) {
      this.dataStore[this.top++] = value;
    };
  }
  
  function StackCalc(instrucciones) {
    const stack = new Stack();
    let noValida = false;
  
    function ejecutar(instruccion) {
      if (instruccion === '+') {
        stack.sum();
      } else if (instruccion === '-') {
        stack.rest();
      } else if (instruccion === '*') {
        stack.mult();
      } else if (instruccion === '/') {
        stack.div();
      } else if (instruccion === 'DUP') {
        stack.dup();
      } else if (instruccion === 'POP') {
        stack.pop();
      } else if (!isNaN(instruccion)) {  
        stack.psh(parseFloat(instruccion));
      } else {
        noValida = instruccion;
        return false;
      }
      return true;
    }
  
    function run(instrucciones) {
      const instrArray = instrucciones.split(' ');
  
      for (let i = 0; i < instrArray.length; i++) {
        if (!ejecutar(instrArray[i])) break;
      }
    }
  
    function getValue() {
      if (noValida) {
        return 'Instrucción inválida: ' + noValida;
      }
      return stack.dataStore[stack.top - 1] || 0;
    }
  
    run(instrucciones);
    return getValue();
  }
  
  console.log(StackCalc('12')); 
  console.log(StackCalc('5 6 +')); 
  console.log(StackCalc('3 6 -')); 
  console.log(StackCalc('3 DUP +')); 
  console.log(StackCalc('2 5 - 5 + DUP +'));
  console.log(StackCalc('9 14 DUP + - 3 POP'));
  console.log(StackCalc('1 2 3 4 5 POP POP POP'));
  console.log(StackCalc('13 DUP 4 POP 5 DUP + DUP + -'));
  console.log(StackCalc('6 5 5 7 * - /'));
  console.log(StackCalc('4 2 4 * 3 + 5 + / 5 -'));
  console.log(StackCalc('5 8 + 4 5 1 + POP 13 +'));
  console.log(StackCalc('x'));
  console.log(StackCalc('4 6 + x'));
  console.log(StackCalc('y x *'));
  console.log(StackCalc(''));
  console.log(StackCalc('4 POP'));