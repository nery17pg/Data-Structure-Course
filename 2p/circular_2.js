export function Queue() {
    //0=c, 1=a, 2=j, 3=o, 4=u, 5=r, 6=v
        this.dataStore = ['c','a','j','o','u','r','v'];
        this.enqueue = enqueue;
        this.dequeue = dequeue;
        this.front = 0;
        this.back = 0;
        this.cont = 0;
        this.maxQueue = this.dataStore.length;
        this.toString = toString;
        this.size = size;
        this.isEmpty = isEmpty;
        this.isFull = isFull;
        }
    
        function enqueue(element) {
            if(!this.isFull()){
                this.dataStore.push(element);
                this.back = (this.back + 1) % this.maxQueue;
                this.cont++;
            }
            else{
                console.log("La cola está llena", element);
            }
        }
    
        function dequeue() {
            if(!this.isEmpty()){
                let element = this.dataStore[this.front];
                this.dataStore[this.front] = undefined;
                this.front = (this.front + 1) % this.maxQueue;
                this.cont--;
                return element;
            }
            else{
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
                cola: this.dataStore,
                llena: this.isFull(),
                tamaño: this.size(),
                frente: this.front,
                final: this.back
            };
        }
    