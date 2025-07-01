//PREORDER
function preorder(n) {  //node
    if (n !== null) {  //else  //base case
      console.log(n.d); //traverse, analize, explore, search, TASK (console)
  
      //recursive calls
      preorder(n.l);  
      preorder(n.r); 
    } //else
  };