class BinaryTree {
    constructor() {
        this.root = null;
    }
    // Internal Node class
    static TreeNode = class {
        constructor(value) {
            this.value = value;
            this.left = null;
            this.right = null;
        }
    };
    // In-order traversal using an explicit stack (iterative)
    inOrderTraversalIterative() {
        const result = [];
        const stack = [];
        let currentNode = this.root;

        while (currentNode !== null || stack.length > 0) {
            // Reach the left most Node of the current Node
            while (currentNode !== null) {
                stack.push(currentNode);
                currentNode = currentNode.left;
            }

            // Current must be NULL at this point
            currentNode = stack.pop();

            // Visit the current node
            result.push(currentNode.value);

            // Traverse the right subtree
            currentNode = currentNode.right;
        }

        return result;
    }
}

// Example usage
const tree = new BinaryTree();

tree.root = new BinaryTree.TreeNode(1);
tree.root.left = new BinaryTree.TreeNode(2);
tree.root.right = new BinaryTree.TreeNode(3);
tree.root.left.left = new BinaryTree.TreeNode(4);
tree.root.left.right = new BinaryTree.TreeNode(5);
tree.root.right.left = new BinaryTree.TreeNode(6);
tree.root.right.right = new BinaryTree.TreeNode(7);

const inOrderResultIterative = tree.inOrderTraversalIterative();
console.log("In-order Traversal (Iterative):", inOrderResultIterative);
