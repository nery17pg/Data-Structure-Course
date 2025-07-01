export class mGraph{
    constructor(M = []) {
      this.matrix = M;  
      this.r = this.matrix.length;  
      this.c = 0;  
        if (this.r > 0) {
          this.c = this.matrix[0].length;  
        }
      this.vertices = new Array(this.r); 
      this.edges = new Array(this.r);    
        for (let i = 0; i < this.r; i++) {
          this.vertices[i] = null;  
          this.edges[i] = 0;        
        }
    }
  
    addVertex(v) {
      this.vertices[v] = v;
    }
  
    addEdge(r, c, w) {
      if (r < this.r && c < this.c) {
        this.matrix[r][c] = w;
        this.matrix[c][r] = w; 
      }
    }
  
    removeEdge(r, c) {
      if (r < this.r && c < this.c) {
        this.matrix[r][c] = 0;
        this.matrix[c][r] = 0;
      }
    }
  
    removeVertex(v) {
      if (v >= 0 && v < this.r) {
        this.vertices[v] = null;
        for (let i = 0; i < this.r; i++) {
          this.matrix[i][v] = 0;
          this.matrix[v][i] = 0;
        }
      }
    }
  
    // Segunda parte
    degree(v) {
      let deg = 0;
      for (let i = 0; i < this.r; i++) {
        if (this.matrix[v][i] !== 0) deg++; 
      }
      return deg;
    }
  
    totalDegree() {
      let total = 0;
      for (let i = 0; i < this.r; i++) {
        total += this.degree(i); 
      }
      return total;
    }
  
    // Tercera parte
    isDigraph() {
      for (let i = 0; i < this.r; i++) {
        for (let j = 0; j < this.c; j++) {
          if (this.matrix[i][j] !== this.matrix[j][i]) {
            return true; 
          }
        }
      }
      return false;
    }
  
    isWeighted() {
      for (let i = 0; i < this.r; i++) {
        for (let j = 0; j < this.c; j++) {
          if (this.matrix[i][j] !== 0 && this.matrix[i][j] !== 1) {
            return true; 
          }
        }
      }
      return false;
    }
  
    isComplete() {
      for (let i = 0; i < this.r; i++) {
        for (let j = 0; j < this.c; j++) {
          if (i !== j && this.matrix[i][j] === 0) {
            return false; 
          }
        }
      }
      return true;
    }
  
    isTree() {
      let edgesCount = 0;
      for (let i = 0; i < this.r; i++) {
        for (let j = i + 1; j < this.c; j++) {
          if (this.matrix[i][j] !== 0) edgesCount++;
        }
      }
      return edgesCount === this.r - 1; 
    }
  
    isGraph() {
      if (this.c === this.r) {
        console.log("Es un grafo");
      } else {
        console.log("No es un grafo");
      }
    }
  
    printGraphAsMatrix() {
      for (let i = 0; i < this.r; i++) {
        console.log(this.matrix[i].join(" "));
      }
    }
  }