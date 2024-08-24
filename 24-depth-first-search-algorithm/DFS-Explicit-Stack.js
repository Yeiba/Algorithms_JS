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
