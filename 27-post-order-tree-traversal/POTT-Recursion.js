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
    // Post-order traversal using recursion
    postOrderTraversal(node, result = []) {
        if (node === null) {
            return;
        }

        // Traverse the left subtree
        this.postOrderTraversal(node.left, result);

        // Traverse the right subtree
        this.postOrderTraversal(node.right, result);

        // Visit the current node
        result.push(node.value);

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

const postOrderResult = tree.postOrderTraversal(tree.root);
console.log("Post-order Traversal (Recursive):", postOrderResult);
