# Algorithms - post-order tree traversal

What is Recursion? :
Recursion is a problem solving technique where the solution depends on solutions to smaller instances of the same problem

Recursion is when a function calls itself
Why is Recursion? :
A Great technique to simplify your solution
 
If you find yourself breaking down your problem into smaller versions of the same problem, recursion is very useful.

Post-order traversal is a depth-first search (DFS) algorithm for trees where nodes are recursively visited in this order:

1. Recursively traverse the left subtree.
2. Recursively traverse the right subtree.
3. Visit the current node.

### Post-order Tree Traversal Implementation in JavaScript

#### 1. **Post-order Traversal Using Recursion**

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

tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);
tree.root.right.left = new TreeNode(6);
tree.root.right.right = new TreeNode(7);

const postOrderResult = tree.postOrderTraversal(tree.root);
console.log("Post-order Traversal (Recursive):", postOrderResult);
```

#### 2. **Post-order Traversal Using an Explicit Stack (Iterative)**

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
```

### Explanation:

1. **TreeNode Class**:

   - Represents each node in the tree, containing a value and pointers to the left and right children.
2. **BinaryTree Class**:

   - Contains the root of the tree and methods for Post-order traversal.
3. **Post-order Traversal (Recursive)**:

   - The `postOrderTraversal(node)` method first recursively traverses the left subtree, then the right subtree, and finally visits the current node.
   - The result is collected in an array and returned.
4. **Post-order Traversal (Iterative)**:

   - The `postOrderTraversalIterative()` method uses two stacks to achieve the traversal.
   - The first stack (`stack1`) is used to traverse the tree and push nodes.
   - The second stack (`stack2`) is used to reverse the order of nodes so that when they are popped, they follow the Post-order traversal order.
   - Finally, the nodes are added to the result array.
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

   - Both the recursive and iterative versions produce the same Post-order traversal result.

### Example Output:

If you run the provided example, the output will be:

```javascript
Post-order Traversal (Recursive): [ 4, 5, 2, 6, 7, 3, 1 ]
Post-order Traversal (Iterative): [ 4, 5, 2, 6, 7, 3, 1 ]
```

This output shows the order in which the nodes are visited during the Post-order traversal.

### Summary:

- Post-order traversal visits nodes in the order: left subtree, right subtree, root.
- It can be implemented both recursively and iteratively using two stacks.
- Post-order traversal is useful for operations that require processing child nodes before the parent node, such as deleting a tree or evaluating postfix expressions in expression trees.
