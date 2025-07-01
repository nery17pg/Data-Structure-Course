function Echo(x) {
    this.x = x//public
  }
  
  let e = new Echo(0)
  e.x 
  e.x = 5
  e.x