function Echo(y) {
    let x = y //hidden
  
    this.getX = function(){return x}
    this.setX = function(y){x=y}
  }
  
  let e = new Echo(0)
  
  console.log(e.getX())
  e.setX(3)
  console.log(e.getX())