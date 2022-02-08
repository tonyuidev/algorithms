class NodeItem {
  constructor(public value: number, public left?: any, public right?: any) {}

  nodeSolution() {
    let isValid = this.isValidBST(this, -Number.MAX_VALUE, Number.MAX_VALUE);
    return isValid;
  }

  isValidBST(node: this, low: number, high: number) {
    if (!node) {
      return true;
    }
    let val = node.value;
    if (
      val > low &&
      val < high &&
      this.isValidBST(node.left, low, val) &&
      this.isValidBST(node.right, val, high)
    ) {
      return true;
    }
    return false;
  }
}

let node = new NodeItem(5); // define main BST node
node.left = new NodeItem(4); // create node to left
node.right = new NodeItem(7); // create node to right
let valid = node.nodeSolution(); // the binary tree is valid

node.right.left = new NodeItem(2); // add a node to the left of node.right
let valid_false = node.nodeSolution(); // the binary tree is now invalid
