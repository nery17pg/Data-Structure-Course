//INORDER
function inorder(n) {  //node
    if (n !== null) {  //else  //base case
  
      //recursive calls
      inorder(n.l);  
      console.log(n.d); //traverse, analize, explore, search, TASK (console)
      inorder(n.r);  
    } //else
  };