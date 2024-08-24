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
