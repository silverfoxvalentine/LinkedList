class LinkedList {
  constructor(name) {
    name;
  }

  append(value, node = this.headNode) {
    if (!this.headNode) {
      let lastNode = new Node(value);
      this.headNode = lastNode;
    } else if (node.nextNode === null) {
      let lastNode = new Node(value);
      node.nextNode = lastNode;
    } else {
      this.append(value, node.nextNode);
    }
  }

  prepend(value) {
    if (!this.headNode) {
      let firstNode = new Node(value);
      this.headNode = firstNode;
    } else {
      this.headNode = new Node(value, this.headNode);
    }
  }

  head() {
    if (this.headNode) return this.headNode;
    else console.log("no head node found");
  }

  size() {
    let count = 0;
    let current = this.headNode;
    while (current) {
      ++count;
      current = current.nextNode;
    }
    return count;
  }

  tail() {
    if (!this.headNode) {
      console.log("no nodes found");
    } else {
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
      }
      return current;
    }
  }

  at(index) {
    let current = this.headNode;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
  }

  pop() {
    if (!this.headNode) {
      console.log("no nodes found");
    } else if (!this.headNode.nextNode) {
      this.headNode.nextNode = null;
    } else {
      let current = this.headNode;
      while (current.nextNode.nextNode != null) {
        current = current.nextNode;
      }
      current.nextNode = null;
    }
  }

  contains(value) {
    let current = this.headNode;
    while (current && current.value !== value) {
      current = current.nextNode;
    }
    if (!current) return false;
    else return true;
  }

  find(value) {
    let current = this.headNode;
    let count = 0;
    while (current && current.value !== value) {
      current = current.nextNode;
      ++count;
    }
    if (!current) return null;
    else return count;
  }

  toString() {
    if (!this.headNode) {
      console.log("no nodes found");
    } else {
      let current = this.headNode;
      let string = "";
      string += `(${current.value})`;
      while (current.nextNode) {
        current = current.nextNode;
        string = string + " -> " + `(${current.value})`;
      }
      string += " -> null";
      return string;
    }
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size()) {
      console.log("incorrect index input");
      return;
    } else {
      let current = this.headNode;
      for (let i = 0; i < index - 1; i++) {
        current = current.nextNode;
      }
      if (current === this.headNode) {
        let newNode = new Node(value, current);
        this.headNode = newNode;
      } else {
        let newNode = new Node(value, current.nextNode);
        current.nextNode = newNode;
      }
    }
  }

  removeAt(index) {
    if (index < 0 || index > this.size()) {
      console.log("incorrect index input");
      return;
    } else {
      let current = this.headNode;
      for (let i = 0; i < index - 1; i++) {
        current = current.nextNode;
      }
      if (current === this.headNode) {
        this.headNode = current.nextNode;
      } else {
        current.nextNode = current.nextNode.nextNode;
      }
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
