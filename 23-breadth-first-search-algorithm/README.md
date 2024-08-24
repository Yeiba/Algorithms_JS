# Algorithms - Breadth-first-search algorithm

Below is an implementation of the Breadth-First Search (BFS) algorithm in JavaScript. BFS is a graph traversal algorithm that starts at a selected node and explores all its neighboring nodes at the present depth before moving on to nodes at the next depth level.

### Breadth-First Search (BFS) Implementation in JavaScript

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

    // Breadth-First Search algorithm
    bfs(startingNode) {
        const visited = new Set();   // To track visited nodes
        const queue = [];            // To manage the BFS queue
        const result = [];           // To store the BFS traversal order

        // Start with the starting node
        visited.add(startingNode);
        queue.push(startingNode);

        while (queue.length > 0) {
            const currentNode = queue.shift();
            result.push(currentNode);

            const neighbors = this.adjList.get(currentNode);

            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
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

const bfsTraversal = graph.bfs('A');
console.log("BFS Traversal:", bfsTraversal);
```

### Explanation:

1. **Graph Representation**:

   - The graph is represented using an adjacency list, which is stored in a `Map` where each vertex is a key, and the value is an array of neighboring vertices.
2. **Adding Vertices**:

   - The `addVertex(vertex)` method adds a new vertex to the graph.
3. **Adding Edges**:

   - The `addEdge(vertex1, vertex2)` method adds an edge between `vertex1` and `vertex2`.
   - This implementation adds edges in both directions (undirected graph). For a directed graph, you would remove the line `this.adjList.get(vertex2).push(vertex1);`.
4. **Breadth-First Search (BFS)**:

   - The `bfs(startingNode)` method implements the BFS algorithm.
   - It uses a `queue` to manage the order of node exploration and a `Set` called `visited` to keep track of visited nodes.
   - The algorithm starts with the `startingNode`, visits all its neighbors, and then proceeds to the neighbors of those neighbors, and so on.
   - The BFS traversal order is stored in the `result` array, which is returned at the end.
5. **Example Graph**:

   - The example graph has 6 vertices (`A`, `B`, `C`, `D`, `E`, `F`) with edges connecting them.
6. **Output**:

   - The `bfsTraversal` array contains the vertices in the order they are visited by the BFS algorithm.

### Example Output:

If you run the provided example, the output will be:

```javascript
BFS Traversal: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
```

This output shows the order in which the nodes are visited during the BFS traversal starting from vertex `A`.

### Summary:

- BFS is a graph traversal algorithm that explores nodes layer by layer.
- It is often used for finding the shortest path in unweighted graphs or exploring all the nodes in a connected component.
- The implementation uses a queue to explore nodes in the correct order and a set to keep track of visited nodes.
