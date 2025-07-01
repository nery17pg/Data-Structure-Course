function posorder(n) {  //node
    if (n !== null) {  //else  //base case
  
      //recursive calls
      posorder(n.l); 
      posorder(n.r);  
      console.log(n.d); //traverse, analize, explore, search, TASK (console)
    } //else
  };