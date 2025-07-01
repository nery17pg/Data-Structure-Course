import { Node } from "./classNotes.js";

export class Tree {
  constructor() {
    // Inicializa el árbol con una raíz nula (vacío).
    this.root = null;

    // Contador para medir los pasos realizados (se usa en la generación de nodos aleatorios).
    this.steps = 0;
  }

  // Método para agregar un valor al árbol.
  add(value) {
    // Crea un nuevo nodo con el valor proporcionado.
    const newNode = new Node(value);

    // Si el árbol está vacío, el nuevo nodo se convierte en la raíz.
    if (!this.root) {
      this.root = newNode;
      return this; // Devuelve la instancia del árbol.
    }

    // Comienza a buscar la posición adecuada desde la raíz.
    let current = this.root;
    while (true) {
      // Si el valor ya existe en el árbol, no lo agrega (evita duplicados).
      if (value === current.value) return undefined;

      // Si el valor es menor al valor actual, va al hijo izquierdo.
      if (value < current.value) {
        // Si el hijo izquierdo está vacío, inserta el nuevo nodo aquí.
        if (!current.l) {
          current.l = newNode;
          return this; // Termina el proceso de inserción.
        }
        // Si el hijo izquierdo ya existe, sigue buscando hacia abajo.
        current = current.l;
      } else {
        // Si el valor es mayor al valor actual, va al hijo derecho.
        if (!current.r) {
          // Si el hijo derecho está vacío, inserta el nuevo nodo aquí.
          current.r = newNode;
          return this; // Termina el proceso de inserción.
        }
        // Si el hijo derecho ya existe, sigue buscando hacia abajo.
        current = current.r;
      }
    }
  }

  // Recorrido en preorden: nodo actual, subárbol izquierdo, subárbol derecho.
  preOrder(node) {
    if (node != null) {
      console.log(node.value); // Procesa el nodo actual (imprime su valor).
      this.inOrder(node.l);    // Recursivamente procesa el subárbol izquierdo.
      this.inOrder(node.r);    // Recursivamente procesa el subárbol derecho.
    }
  }

  // Recorrido en inorden: subárbol izquierdo, nodo actual, subárbol derecho.
  inOrder(node) {
    if (node != null) {
      this.inOrder(node.l);    // Recursivamente procesa el subárbol izquierdo.
      console.log(node.value); // Procesa el nodo actual (imprime su valor).
      this.inOrder(node.r);    // Recursivamente procesa el subárbol derecho.
    }
  }

  // Recorrido en posorden: subárbol izquierdo, subárbol derecho, nodo actual.
  posOrder(node) {
    if (node != null) {
      this.inOrder(node.l);    // Recursivamente procesa el subárbol izquierdo.
      this.inOrder(node.r);    // Recursivamente procesa el subárbol derecho.
      console.log(node.value); // Procesa el nodo actual (imprime su valor).
    }
  }

  // Genera un número dado (`qty`) de nodos con valores aleatorios únicos.
  generate(qty) {
    // Conjunto para almacenar los valores ya utilizados (evita duplicados).
    const usedValues = new Set();

    // Genera valores hasta que se alcance la cantidad deseada.
    while (usedValues.size < qty) {
      // Genera un valor aleatorio entre 0 y 99,999.
      const valor = Math.floor(Math.random() * 100000);

      // Si el valor no se ha usado, lo agrega al árbol y al conjunto.
      if (!usedValues.has(valor)) {
        this.add(valor);       // Agrega el valor al árbol.
        usedValues.add(valor); // Registra el valor como usado.
      }

      // Incrementa el contador de pasos realizados.
      this.steps++;
    }
  }
}