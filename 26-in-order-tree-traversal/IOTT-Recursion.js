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

    // In-order traversal using recursion
    inOrderTraversal(node, result = []) {
        if (node === null) {
            return;
        }

        // Traverse the left subtree
        this.inOrderTraversal(node.left, result);

        // Visit the current node
        result.push(node.value);

        // Traverse the right subtree
        this.inOrderTraversal(node.right, result);

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

const inOrderResult = tree.inOrderTraversal(tree.root);
console.log("In-order Traversal (Recursive):", inOrderResult);
