class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Pre-order traversal using an explicit stack (iterative)
    preOrderTraversalIterative() {
        const result = [];
        if (this.root === null) return result;

        const stack = [this.root];

        while (stack.length > 0) {
            const currentNode = stack.pop();

            // Visit the current node
            result.push(currentNode.value);

            // Push right child first so left child is processed first
            if (currentNode.right !== null) {
                stack.push(currentNode.right);
            }
            if (currentNode.left !== null) {
                stack.push(currentNode.left);
            }
        }

        return result;
    }
}

// Example usage
const tree = new BinaryTree();

tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);
tree.root.right.left = new TreeNode(6);
tree.root.right.right = new TreeNode(7);

const preOrderResultIterative = tree.preOrderTraversalIterative();
console.log("Pre-order Traversal (Iterative):", preOrderResultIterative);
