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
    // Level-order traversal using a queue (BFS)
    levelOrderTraversal() {
        const result = [];
        if (this.root === null) return result;

        const queue = [this.root];

        while (queue.length > 0) {
            const currentNode = queue.shift();
            result.push(currentNode.value);

            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
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

const levelOrderResult = tree.levelOrderTraversal();
console.log("Level-order Traversal:", levelOrderResult);
