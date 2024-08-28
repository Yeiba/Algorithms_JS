# Algorithms - In-order tree traversal

What is Recursion? :
Recursion is a problem solving technique where the solution depends on solutions to smaller instances of the same problem

Recursion is when a function calls itself
Why is Recursion? :
A Great technique to simplify your solution
 
If you find yourself breaking down your problem into smaller versions of the same problem, recursion is very useful.

In-order traversal is a type of depth-first search (DFS) used in binary trees. In In-order traversal, the nodes are recursively visited in this order:

1. Recursively traverse the left subtree.
2. Visit the current node.
3. Recursively traverse the right subtree.

### In-order Tree Traversal Implementation in JavaScript

#### 1. **In-order Traversal Using Recursion**

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
```

#### 2. **In-order Traversal Using an Explicit Stack (Iterative)**

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

tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);
tree.root.right.left = new TreeNode(6);
tree.root.right.right = new TreeNode(7);

const inOrderResultIterative = tree.inOrderTraversalIterative();
console.log("In-order Traversal (Iterative):", inOrderResultIterative);
```

### Explanation:

1. **TreeNode Class**:

   - Represents each node in the tree, containing a value and pointers to the left and right children.
2. **BinaryTree Class**:

   - Contains the root of the tree and the methods to perform In-order traversal.
3. **In-order Traversal (Recursive)**:

   - The `inOrderTraversal(node)` method first recursively traverses the left subtree, visits the current node, and then recursively traverses the right subtree.
   - The result is stored in an array and returned at the end of the traversal.
4. **In-order Traversal (Iterative)**:

   - The `inOrderTraversalIterative()` method uses an explicit stack to traverse the tree iteratively.
   - It pushes all left children to the stack, then visits the node, and finally processes the right subtree.
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

   - Both the recursive and iterative versions produce the same In-order traversal result.

### Example Output:

If you run the provided example, the output will be:

```javascript
In-order Traversal (Recursive): [ 4, 2, 5, 1, 6, 3, 7 ]
In-order Traversal (Iterative): [ 4, 2, 5, 1, 6, 3, 7 ]
```

This output shows the order in which the nodes are visited during the In-order traversal.

### Summary:

- In-order traversal visits nodes in the order: left subtree, root, right subtree.
- It can be implemented both recursively and iteratively using an explicit stack.
- In-order traversal is particularly useful for binary search trees (BSTs), as it visits nodes in non-decreasing order.
