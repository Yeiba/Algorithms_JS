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

    // Post-order traversal using an explicit stack (iterative)
    postOrderTraversalIterative() {
        const result = [];
        if (this.root === null) return result;

        const stack1 = [this.root];
        const stack2 = [];

        while (stack1.length > 0) {
            const currentNode = stack1.pop();
            stack2.push(currentNode);

            if (currentNode.left !== null) {
                stack1.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                stack1.push(currentNode.right);
            }
        }

        while (stack2.length > 0) {
            result.push(stack2.pop().value);
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

const postOrderResultIterative = tree.postOrderTraversalIterative();
console.log("Post-order Traversal (Iterative):", postOrderResultIterative);
