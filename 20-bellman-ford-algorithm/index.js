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
