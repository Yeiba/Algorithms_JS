# Algorithms - Floyd–Warshall algorithm


Below is an implementation of the Floyd-Warshall algorithm in JavaScript. The Floyd-Warshall algorithm is used to find the shortest paths between all pairs of vertices in a weighted graph, including graphs with negative edge weights. It can also detect negative-weight cycles.

### Floyd-Warshall Algorithm Implementation in JavaScript

```javascript
function floydWarshall(graph) {
    const dist = [];
    const numVertices = graph.length;

    // Initialize the distance matrix
    for (let i = 0; i < numVertices; i++) {
        dist[i] = [];
        for (let j = 0; j < numVertices; j++) {
            if (i === j) {
                dist[i][j] = 0;
            } else if (graph[i][j] !== undefined) {
                dist[i][j] = graph[i][j];
            } else {
                dist[i][j] = Infinity;
            }
        }
    }

    // Floyd-Warshall algorithm
    for (let k = 0; k < numVertices; k++) {
        for (let i = 0; i < numVertices; i++) {
            for (let j = 0; j < numVertices; j++) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    // Check for negative-weight cycles
    for (let i = 0; i < numVertices; i++) {
        if (dist[i][i] < 0) {
            console.error("Graph contains a negative-weight cycle");
            return null;
        }
    }

    return dist;
}

// Example graph represented as an adjacency matrix
const graph = [
    [0, 3, Infinity, 5],
    [2, 0, Infinity, 4],
    [Infinity, 1, 0, Infinity],
    [Infinity, Infinity, 2, 0]
];

const shortestPaths = floydWarshall(graph);
console.log("Shortest paths matrix:");
if (shortestPaths) {
    console.log(shortestPaths);
}
```

### Explanation:

1. **Initialization**:

   - A 2D array `dist` is initialized to store the shortest distances between all pairs of vertices.
   - If there is a direct edge between vertices `i` and `j`, the distance is initialized with the edge weight. If `i === j`, the distance is initialized to `0`. Otherwise, it is initialized to `Infinity` to indicate no direct path.
2. **Floyd-Warshall Algorithm**:

   - The algorithm iterates through all pairs of vertices `(i, j)` and considers each vertex `k` as an intermediate point.
   - If the distance from `i` to `j` through `k` (`dist[i][k] + dist[k][j]`) is shorter than the current known distance `dist[i][j]`, it updates `dist[i][j]` with this shorter path.
3. **Negative-Weight Cycle Detection**:

   - After computing the shortest paths, the algorithm checks the diagonal of the `dist` matrix (`dist[i][i]`) to detect negative-weight cycles. If any value on the diagonal is negative, the graph contains a negative-weight cycle.
4. **Graph Representation**:

   - The graph is represented as an adjacency matrix, where `graph[i][j]` is the weight of the edge from vertex `i` to vertex `j`. If there is no edge, the value is `Infinity`.
5. **Example Graph**:

   - The example graph is represented as an adjacency matrix with 4 vertices. Some edges have weights, while others are represented as `Infinity` (no direct edge).
6. **Output**:

   - The output `shortestPaths` is a 2D array where the value at `shortestPaths[i][j]` is the shortest distance from vertex `i` to vertex `j`.

### Example Output:

If you run the provided example, the output will be something like:

```javascript
Shortest paths matrix:
[
  [ 0, 3, 7, 5 ],
  [ 2, 0, 6, 4 ],
  [ 3, 1, 0, 5 ],
  [ 5, 3, 2, 0 ]
]
```

This output shows the shortest paths between all pairs of vertices in the graph.

### Summary:

- The Floyd-Warshall algorithm is a dynamic programming algorithm that finds the shortest paths between all pairs of vertices in a graph.
- It can handle graphs with negative edge weights and can detect negative-weight cycles.
- The algorithm has a time complexity of \(O(V^3)\), where \(V\) is the number of vertices in the graph.
