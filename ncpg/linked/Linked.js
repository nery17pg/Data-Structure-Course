export function Linked(nodo) {
  this.head = nodo;
  this.size = 1; // Tamaño de la lista

  this.append = append;
  this.traverse = traverse; // Recorre la lista
  this.contains = contains; // Busca un elemento en la lista
  this.sort = sort; // Ordenamiento
  this.addAfter = addAfter; // Agrega un elemento después de un elemento
}

function append(n) {
  if (!this.head) {
    this.head = n;
  } else {
    let actual = this.head;
    while (actual.next) {
      actual = actual.next;
    }
    actual.next = n;
  }
  this.size++;
}

function traverse() {
  let c = this.head;
  while (c) {
    console.log(c.data);
    c = c.next;
  }
}

function contains(a) {
  let actual = this.head;
  while (actual) {
    if (actual.data === a) {
      console.log("El elemento: " + a + " sí está en la lista");
      return true; // Retorna true si se encuentra
    }
    actual = actual.next;
  }
  console.log("El elemento " + a + " no se encontró en la lista");
  return false; // Retorna false si no se encuentra
}

function sort() {
  if (!this.head || !this.head.next) return; // Si la lista está vacía o tiene un solo nodo
  let change;
  do {
    change = false;
    let actual = this.head;
    while (actual.next) {
      if (actual.data > actual.next.data) {
        // Intercambia los datos si están en el orden incorrecto
        let temp = actual.data;
        actual.data = actual.next.data;
        actual.next.data = temp;
        change = true;
      }
      actual = actual.next;
    }
  } while (change);
}

function addAfter(valueWaited, newNode) {
  let actual = this.head;
  while (actual) {
    if (actual.data === valueWaited) {
      newNode.next = actual.next;
      actual.next = newNode;
      this.size++;
      return;
    }
    actual = actual.next;
  }
  console.log("El valor " + valueWaited + " no se encontró en la lista");
}
