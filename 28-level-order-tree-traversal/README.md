# Algorithms - Level-order tree traversal


Level-order traversal is a breadth-first search (BFS) algorithm for trees where nodes are visited level by level from top to bottom. Each level is processed from left to right. This can be implemented using a queue data structure to manage the nodes at each level.

Here's how to implement a Level-order tree traversal algorithm in JavaScript:

### Level-order Tree Traversal Implementation

#### Using a Queue (Breadth-First Search)

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

tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);
tree.root.right.left = new TreeNode(6);
tree.root.right.right = new TreeNode(7);

const levelOrderResult = tree.levelOrderTraversal();
console.log("Level-order Traversal:", levelOrderResult);
```

### Explanation:

1. **TreeNode Class**:

   - Represents each node in the tree, containing a value and pointers to the left and right children.
2. **BinaryTree Class**:

   - Contains the root of the tree and the method for Level-order traversal.
3. **Level-order Traversal**:

   - The `levelOrderTraversal()` method uses a queue to manage nodes at each level.
   - Nodes are added to the queue starting with the root.
   - For each node, the method removes it from the queue, processes it by adding its value to the result array, and then adds its children (if any) to the queue.
   - The process continues until all nodes have been visited.
4. **Example Tree**:

   - The example tree is a binary tree with the structure:

   ```
       1
      / \
     2   3
    / \ / \
   4  5 6  7
   ```
5. **Output**:

   - The level-order traversal visits nodes from left to right at each level, starting from the root.

### Example Output:

If you run the provided example, the output will be:

```javascript
Level-order Traversal: [ 1, 2, 3, 4, 5, 6, 7 ]
```

This output shows the order in which nodes are visited during the Level-order traversal.

### Summary:

- Level-order traversal visits nodes level by level from top to bottom and left to right.
- It uses a queue to manage nodes at each level.
- This traversal is useful for algorithms that require visiting nodes in a level-by-level manner, such as finding the shortest path in an unweighted graph represented as a tree.
