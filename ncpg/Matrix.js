export class Matrix{
    constructor(r, c){
      this.r = r;
      this.c = c;
      this.matrix = []
    }
  
    ones(){
      for(let i=0; i<this.r; i++){
        this.matrix[i] = [];
        for(let j=0; j<this.c; j++){
          this.matrix[i][j] = 1;
        }
      }
      return this.matrix;
    }
  
    zeroes() {
      for (let i = 0; i < this.r; i++) {
        this.matrix[i] = [];
        for (let j = 0; j < this.c; j++) {
          this.matrix[i][j] = 0;
        }
      }
      return this.matrix;
    }
  
    random(min = 0, max = 1) {
      for (let i = 0; i < this.r; i++) {
        this.matrix[i] = [];
        for (let j = 0; j < this.c; j++) {
          this.matrix[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
        }
      }
      return this.matrix;
    }
  
    print(){
      for (let i = 0; i < this.r; i++) {
        console.log(this.matrix[i].join(" ")); 
      }
    }
  
    isSymmetric() {
      if (this.r !== this.c) return false; 
      for (let i = 0; i < this.r; i++) {
        for (let j = 0; j < this.c; j++) {
          if (this.matrix[i][j] !== this.matrix[j][i]) {
            return false;
          }
        }
      }
      return true;
    }
  
    isSquared(){
      return (this.r === this.c) 
    }
  }
  