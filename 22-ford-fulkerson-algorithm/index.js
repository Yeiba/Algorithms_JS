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
