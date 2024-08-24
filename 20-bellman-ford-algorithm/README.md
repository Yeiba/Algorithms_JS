# Algorithms - Bellman-Ford-algorithm

Below is an implementation of the Bellman-Ford algorithm in JavaScript. The Bellman-Ford algorithm is used to find the shortest paths from a single source node to all other nodes in a graph, even when the graph has negative edge weights. Unlike Dijkstra's algorithm, Bellman-Ford can handle graphs with negative weight edges.

### Bellman-Ford Algorithm Implementation in JavaScript

```javascript
function bellmanFord(graph, startNode) {
    const distances = {};
    const predecessors = {};

    // Step 1: Initialize distances from startNode to all other nodes as infinity and the startNode to 0
    for (let node in graph) {
        distances[node] = Infinity;
        predecessors[node] = null;
    }
    distances[startNode] = 0;

    // Step 2: Relax all edges |V| - 1 times (where |V| is the number of vertices)
    const vertices = Object.keys(graph);
    for (let i = 0; i < vertices.length - 1; i++) {
        for (let u of vertices) {
            for (let v in graph[u]) {
                const weight = graph[u][v];
                if (distances[u] + weight < distances[v]) {
                    distances[v] = distances[u] + weight;
                    predecessors[v] = u;
                }
            }
        }
    }

    // Step 3: Check for negative-weight cycles by checking one more time if any distances can be updated
    for (let u of vertices) {
        for (let v in graph[u]) {
            const weight = graph[u][v];
            if (distances[u] + weight < distances[v]) {
                console.error("Graph contains a negative-weight cycle");
                return null;
            }
        }
    }

    return { distances, predecessors };
}

// Example graph with negative weights represented as an adjacency list
const graph = {
    A: { B: -1, C: 4 },
    B: { C: 3, D: 2, E: 2 },
    C: {},
    D: { B: 1, C: 5 },
    E: { D: -3 }
};

const startNode = 'A';
const result = bellmanFord(graph, startNode);

if (result) {
    console.log("Shortest distances from node", startNode, ":", result.distances);
    console.log("Predecessors:", result.predecessors);
}
```

### Explanation:

1. **Initialization**:

   - The `distances` object keeps track of the shortest known distance from the `startNode` to each node.
   - The `predecessors` object keeps track of the previous node on the shortest path to each node, which can be used to reconstruct the shortest path.
2. **Relaxation**:

   - For `|V| - 1` iterations (where `|V|` is the number of vertices), the algorithm checks each edge to see if a shorter path to the destination vertex can be found by going through the source vertex.
   - If a shorter path is found, the `distances` and `predecessors` are updated.
3. **Negative-Weight Cycle Detection**:

   - After relaxing the edges `|V| - 1` times, the algorithm checks each edge once more to see if a shorter path can still be found. If it can, this indicates a negative-weight cycle, and the algorithm terminates with an error.
4. **Graph Representation**:

   - The graph is represented as an adjacency list, where each node points to its neighbors with the corresponding edge weights.
5. **Example Graph**:

   - The example graph has 5 nodes (`A`, `B`, `C`, `D`, `E`) and includes edges with negative weights.
6. **Output**:

   - If no negative-weight cycle is detected, the algorithm returns the shortest distances from the `startNode` to all other nodes, as well as the predecessors for each node.

### Example Output:

If you run the provided example, the output will be something like:

```javascript
Shortest distances from node A : { A: 0, B: -1, C: 2, D: -2, E: 1 }
Predecessors: { A: null, B: 'A', C: 'B', D: 'E', E: 'B' }
```

This output shows the shortest distances from node `A` to all other nodes in the graph, and the `predecessors` object indicates the node from which each shortest path comes.

### Summary:

- The Bellman-Ford algorithm can handle graphs with negative edge weights and can detect negative-weight cycles.
- It is less efficient than Dijkstra's algorithm but is more versatile because it works on graphs with negative weights.
- The `distances` object gives the shortest path lengths from the `startNode`, while the `predecessors` object helps in reconstructing the shortest paths.
