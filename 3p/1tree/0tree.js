/*
binary tree
*/

//Nodos
let root = {
    d: "c", //data
    l: null, //left
    r: null, //right
  };
  
  let n1 = {
    d: "b",
    l: null,
    r: null,
  };
  
  let n2 = {
    d: "a",
    l: null,
    r: null,
  };
  
  //Estructura del tree
  root.l = n1; //left
  root.r = n2; //right
  
  //PREORDER
  function preorder(n) {  //node
    if (n !== null) {  //else  //base case
      console.log(n.d); //traverse, analize, explore, search, TASK (console)
  
      //recursive calls
      preorder(n.l);  
      preorder(n.r); 
    } //else
  };
  
  //INORDER
  function inorder(n) {  //node
    if (n !== null) {  //else  //base case
  
      //recursive calls
      inorder(n.l);  
      console.log(n.d); //traverse, analize, explore, search, TASK (console)
      inorder(n.r);  
    } //else
  };
  
  //POSORDER
  function posorder(n) {  //node
    if (n !== null) {  //else  //base case
  
      //recursive calls
      posorder(n.l); 
      posorder(n.r);  
      console.log(n.d); //traverse, analize, explore, search, TASK (console)
    } //else
  };
  
  console.log("Preorder:");
  preorder(root);  
  
  console.log("Inorder:");
  inorder(root);   
  
  console.log("Posorder:");
  posorder(root); 
  
  
  //Escribir el método contains(data) en el árbol binario de búsqueda que devuelve true si el dato es encontrado y false en caso contrario.
  function contains(n, data) {
    if(n !== null)  //Caso base
      if(n.d === data)
        return true
       else 
        return contains(n.l, data) || contains(n.r, data);
    else
      return false
  };
  
  //console.log(traverse(n1));
  //console.log(traverse(n2));
  //console.log(traverse(root));
  
  /*console.log(contains(root, 1));
  console.log(contains(root, -1));
  console.log(contains(root, '+'));
  console.log(contains(root, '-'));*/
  
  //Propiedades de un árbol es ROOT