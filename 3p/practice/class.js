import { Node } from "./classNode.js";

export class Tree {
  constructor() {
    this.root = null;
    this.steps = 0;
  }

  add(value) {
    this.steps++;
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      this.steps++;
      if (value === current.value) return undefined;

      if (value < current.value) {
        if (!current.l) {
          current.l = newNode;
          return this;
        }
        current = current.l;
      } else {
        if (!current.r) {
          current.r = newNode;
          return this;
        }
        current = current.r;
      }
    }
  }

  preOrder(node) {
    if (node != null) {
      console.log(node.value);
      this.inOrder(node.l);
      this.inOrder(node.r);
    }
  }

  //ESTE MÉTODO ORDENA CORRECTAMENTE LOS VALORES DEL ÁRBOL DE MENOR A MAYOR
  inOrder(node) {
    if (node != null) {
      this.steps++;
      this.inOrder(node.l);
      console.log(node.value);
      this.inOrder(node.r);
    }
  }

  posOrder(node) {
    if (node != null) {
      this.inOrder(node.l);
      this.inOrder(node.r);
      console.log(node.value);
    }
  }

  generate(qty) {
    const usedValues = new Set();

    while (usedValues.size < qty) {
      const valor = Math.floor(Math.random() * 100000000);

      if (!usedValues.has(valor)) {
        this.add(valor);
        usedValues.add(valor);
      }
    }
  }

  //OPERACIONES NO SOLICITADAS
  search(value) {
    let current = this.root;

    while (current) {
      if (value === current.value) {
        return current;
      } else if (value < current.value) {
        current = current.l;
      } else {
        current = current.r;
      }
    }
    return null;
  }

  max() {
    if (!this.root) return null;

    let current = this.root;
    while (current.r) {
      current = current.r;
    }
    return current.value;
  }

  min() {
    if (!this.root) return null;

    let current = this.root;
    while (current.l) {
      current = current.l;
    }
    return current.value;
  }

  remove(value, node = this.root) {
    if (!node) return null;

    if (value < node.value) {
      node.l = this.remove(value, node.l);
    } else if (value > node.value) {
      node.r = this.remove(value, node.r);
    } else {
      if (!node.l && !node.r) {
        return null;
      } else if (!node.l) {
        return node.r;
      } else if (!node.r) {
        return node.l;
      } else {
        const successor = this.getMinNode(node.r);
        node.value = successor.value;
        node.r = this.remove(successor.value, node.r);
      }
    }
    return node;
  }

  getMinNode(node) {
    while (node.l) {
      node = node.l;
    }
    return node;
  }

  balance() {
    const nodes = [];

    const inOrderTraversal = (node) => {
      if (!node) return;
      inOrderTraversal(node.l);
      nodes.push(node.value);
      inOrderTraversal(node.r);
    };
    inOrderTraversal(this.root);

    const buildBalancedTree = (start, end) => {
      if (start > end) return null;

      const mid = Math.floor((start + end) / 2);
      const node = new Node(nodes[mid]);

      node.l = buildBalancedTree(start, mid - 1);
      node.r = buildBalancedTree(mid + 1, end);

      return node;
    };

    this.root = buildBalancedTree(0, nodes.length - 1);
  }
}
