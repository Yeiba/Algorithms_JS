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
    // Pre-order traversal using recursion
    preOrderTraversal(node, result = []) {
        if (node === null) {
            return;
        }

        // Visit the current node
        result.push(node.value);

        // Traverse the left subtree
        this.preOrderTraversal(node.left, result);

        // Traverse the right subtree
        this.preOrderTraversal(node.right, result);

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

const preOrderResult = tree.preOrderTraversal(tree.root);
console.log("Pre-order Traversal (Recursive):", preOrderResult);
