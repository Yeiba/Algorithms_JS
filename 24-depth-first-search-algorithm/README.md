# Algorithms - Depth-first search algorithm

What is Recursion? :
Recursion is a problem solving technique where the solution depends on solutions to smaller instances of the same problem

Recursion is when a function calls itself
Why is Recursion? :
A Great technique to simplify your solution
 
If you find yourself breaking down your problem into smaller versions of the same problem, recursion is very useful.

Below is an implementation of the Depth-First Search (DFS) algorithm in JavaScript. DFS is a graph traversal algorithm that starts at a selected node and explores as far as possible along each branch before backtracking.

### Depth-First Search (DFS) Implementation in JavaScript

#### 1. **DFS Using Recursion**

```javascript
class Graph {
    constructor() {
        this.adjList = new Map();
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        if (!this.adjList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adjList.has(vertex2)) {
            this.addVertex(vertex2);
        }
        this.adjList.get(vertex1).push(vertex2);
        this.adjList.get(vertex2).push(vertex1); // Comment this line if the graph is directed
    }

    // Depth-First Search using recursion
    dfs(startingNode, visited = new Set(), result = []) {
        visited.add(startingNode);
        result.push(startingNode);

        const neighbors = this.adjList.get(startingNode);

        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                this.dfs(neighbor, visited, result);
            }
        }

        return result;
    }
}

// Example usage
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');

const dfsTraversal = graph.dfs('A');
console.log("DFS Traversal (Recursive):", dfsTraversal);
```

#### 2. **DFS Using an Explicit Stack**

```javascript
class Graph {
    constructor() {
        this.adjList = new Map();
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        if (!this.adjList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adjList.has(vertex2)) {
            this.addVertex(vertex2);
        }
        this.adjList.get(vertex1).push(vertex2);
        this.adjList.get(vertex2).push(vertex1); // Comment this line if the graph is directed
    }

    // Depth-First Search using an explicit stack
    dfsIterative(startingNode) {
        const visited = new Set();
        const stack = [startingNode];
        const result = [];

        while (stack.length > 0) {
            const currentNode = stack.pop();

            if (!visited.has(currentNode)) {
                visited.add(currentNode);
                result.push(currentNode);

                const neighbors = this.adjList.get(currentNode);
                for (let i = neighbors.length - 1; i >= 0; i--) {
                    if (!visited.has(neighbors[i])) {
                        stack.push(neighbors[i]);
                    }
                }
            }
        }

        return result;
    }
}

// Example usage
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');

const dfsTraversalIterative = graph.dfsIterative('A');
console.log("DFS Traversal (Iterative):", dfsTraversalIterative);
```

### Explanation:

1. **Graph Representation**:

   - The graph is represented using an adjacency list, stored in a `Map`, where each vertex maps to an array of its neighbors.
2. **Adding Vertices**:

   - The `addVertex(vertex)` method adds a vertex to the graph.
3. **Adding Edges**:

   - The `addEdge(vertex1, vertex2)` method adds an edge between two vertices.
   - This implementation adds edges in both directions (for an undirected graph). For a directed graph, remove the line `this.adjList.get(vertex2).push(vertex1);`.
4. **Depth-First Search (Recursive)**:

   - The `dfs(startingNode)` method implements DFS using recursion.
   - It takes the starting node, a `visited` set to track visited nodes, and a `result` array to store the traversal order.
   - The method visits a node, marks it as visited, and then recursively visits all unvisited neighbors.
5. **Depth-First Search (Iterative)**:

   - The `dfsIterative(startingNode)` method implements DFS using an explicit stack.
   - Instead of using recursion, it manually manages the stack to track the nodes to be visited.
   - This version is useful when recursion depth could be too large.
6. **Example Graph**:

   - The example graph has 6 vertices (`A`, `B`, `C`, `D`, `E`, `F`) with edges connecting them.
7. **Output**:

   - The `dfsTraversal` array (from the recursive version) and `dfsTraversalIterative` array (from the iterative version) contain the vertices in the order they are visited by the DFS algorithm.

### Example Output:

If you run the provided example, the output will be:

```javascript
DFS Traversal (Recursive): [ 'A', 'B', 'D', 'E', 'C', 'F' ]
DFS Traversal (Iterative): [ 'A', 'B', 'D', 'E', 'C', 'F' ]
```

This output shows the order in which the nodes are visited during the DFS traversal starting from vertex `A`.

### Summary:

- DFS is a graph traversal algorithm that explores as far as possible along each branch before backtracking.
- It can be implemented recursively or iteratively using a stack.
- The algorithm is often used for exploring connected components, detecting cycles, or solving problems like finding a path in a maze.
