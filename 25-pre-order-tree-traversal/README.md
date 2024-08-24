# Algorithms - Pre-order Tree Traversal


Here's how you can implement a Pre-order tree traversal using Depth-First Search (DFS) in JavaScript. In Pre-order traversal, the nodes are recursively visited in this order:

1. Visit the current node.
2. Recursively traverse the left subtree.
3. Recursively traverse the right subtree.

### Pre-order Tree Traversal Implementation in JavaScript

#### 1. **Pre-order Traversal Using Recursion**

```javascript
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

tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);
tree.root.right.left = new TreeNode(6);
tree.root.right.right = new TreeNode(7);

const preOrderResult = tree.preOrderTraversal(tree.root);
console.log("Pre-order Traversal (Recursive):", preOrderResult);
```

#### 2. **Pre-order Traversal Using an Explicit Stack (Iterative)**

```javascript
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
```

### Explanation:

1. **TreeNode Class**:

   - Represents each node in the tree, containing a value and pointers to the left and right children.
2. **BinaryTree Class**:

   - Contains the root of the tree and the methods to perform Pre-order traversal.
3. **Pre-order Traversal (Recursive)**:

   - The `preOrderTraversal(node)` method visits the current node, then recursively traverses the left subtree, followed by the right subtree.
   - The result is stored in an array and returned at the end of the traversal.
4. **Pre-order Traversal (Iterative)**:

   - The `preOrderTraversalIterative()` method uses an explicit stack to traverse the tree.
   - It visits the current node, then pushes the right child first (so the left child is processed first) and continues until all nodes are visited.
5. **Example Tree**:

   - The example tree is a binary tree with the structure:

   ```
       1
      / \
     2   3
    / \ / \
   4  5 6  7
   ```
6. **Output**:

   - Both the recursive and iterative versions produce the same Pre-order traversal result.

### Example Output:

If you run the provided example, the output will be:

```javascript
Pre-order Traversal (Recursive): [ 1, 2, 4, 5, 3, 6, 7 ]
Pre-order Traversal (Iterative): [ 1, 2, 4, 5, 3, 6, 7 ]
```

This output shows the order in which the nodes are visited during the Pre-order traversal.

### Summary:

- Pre-order traversal visits nodes in the order: root, left subtree, right subtree.
- It can be implemented both recursively and iteratively using an explicit stack.
- Pre-order traversal is useful in various tree-related algorithms, such as copying the tree, and prefix expression evaluation in expression trees.
