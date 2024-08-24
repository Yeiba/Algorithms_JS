# Algorithms - Ford-Fulkerson algorithm


Below is an implementation of the Ford-Fulkerson algorithm in JavaScript. The Ford-Fulkerson algorithm is used to find the maximum flow in a flow network. The algorithm uses the concept of augmenting paths and iteratively increases the flow until no more augmenting paths are found.

### Ford-Fulkerson Algorithm Implementation in JavaScript

```javascript
class Graph {
    constructor(size) {
        this.size = size;
        this.adjMatrix = Array.from({ length: size }, () => Array(size).fill(0));
    }

    addEdge(u, v, capacity) {
        this.adjMatrix[u][v] = capacity;
    }

    bfs(source, sink, parent) {
        const visited = Array(this.size).fill(false);
        const queue = [];

        queue.push(source);
        visited[source] = true;
        parent[source] = -1;

        while (queue.length > 0) {
            const u = queue.shift();

            for (let v = 0; v < this.size; v++) {
                if (!visited[v] && this.adjMatrix[u][v] > 0) {
                    if (v === sink) {
                        parent[v] = u;
                        return true;
                    }
                    queue.push(v);
                    parent[v] = u;
                    visited[v] = true;
                }
            }
        }

        return false;
    }

    fordFulkerson(source, sink) {
        let maxFlow = 0;
        const parent = Array(this.size).fill(-1);

        while (this.bfs(source, sink, parent)) {
            let pathFlow = Infinity;
            let v = sink;

            // Find the maximum flow in the found augmenting path
            while (v !== source) {
                const u = parent[v];
                pathFlow = Math.min(pathFlow, this.adjMatrix[u][v]);
                v = u;
            }

            // Update the residual capacities of the edges and reverse edges along the path
            v = sink;
            while (v !== source) {
                const u = parent[v];
                this.adjMatrix[u][v] -= pathFlow;
                this.adjMatrix[v][u] += pathFlow;
                v = u;
            }

            // Add the path flow to the overall flow
            maxFlow += pathFlow;
        }

        return maxFlow;
    }
}

// Example usage

const graph = new Graph(6);

// Add edges and their capacities
graph.addEdge(0, 1, 16);
graph.addEdge(0, 2, 13);
graph.addEdge(1, 2, 10);
graph.addEdge(1, 3, 12);
graph.addEdge(2, 1, 4);
graph.addEdge(2, 4, 14);
graph.addEdge(3, 2, 9);
graph.addEdge(3, 5, 20);
graph.addEdge(4, 3, 7);
graph.addEdge(4, 5, 4);

const source = 0;
const sink = 5;

const maxFlow = graph.fordFulkerson(source, sink);
console.log("The maximum possible flow is " + maxFlow);
```

### Explanation:

1. **Graph Representation**:

   - The graph is represented as an adjacency matrix (`adjMatrix`) where `adjMatrix[u][v]` stores the capacity of the edge from vertex `u` to vertex `v`.
2. **Adding Edges**:

   - The `addEdge(u, v, capacity)` method adds an edge from vertex `u` to vertex `v` with the given capacity.
3. **BFS for Finding Augmenting Paths**:

   - The `bfs(source, sink, parent)` method performs a breadth-first search (BFS) to find an augmenting path from the `source` to the `sink`.
   - It uses a `parent` array to store the path and returns `true` if an augmenting path is found, `false` otherwise.
4. **Ford-Fulkerson Algorithm**:

   - The `fordFulkerson(source, sink)` method implements the Ford-Fulkerson algorithm to find the maximum flow.
   - It repeatedly finds augmenting paths using the BFS method and augments the flow along these paths until no more augmenting paths are found.
   - The residual capacities of the edges are updated after each augmenting path is found.
5. **Example Graph**:

   - The example graph has 6 vertices (labeled `0` to `5`) and multiple edges with capacities.
   - The source vertex is `0`, and the sink vertex is `5`.
6. **Output**:

   - The output `maxFlow` is the maximum flow from the source to the sink in the graph.

### Example Output:

If you run the provided example, the output will be:

```javascript
The maximum possible flow is 23
```

This output indicates that the maximum flow from vertex `0` (source) to vertex `5` (sink) in the graph is `23`.

### Summary:

- The Ford-Fulkerson algorithm is an effective method to find the maximum flow in a flow network.
- The algorithm iteratively finds augmenting paths and increases the flow along these paths until no more augmenting paths are available.
- The time complexity of the Ford-Fulkerson algorithm depends on the method used to find augmenting paths. In this implementation, BFS is used, which makes the algorithm's complexity \(O(E \times \text{max\_flow})\).
