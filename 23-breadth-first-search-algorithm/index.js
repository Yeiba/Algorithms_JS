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
