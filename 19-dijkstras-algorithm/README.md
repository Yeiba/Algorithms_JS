# Algorithms - Dijkstra's algorithm


Below is an implementation of Dijkstra's algorithm in JavaScript. Dijkstra's algorithm is used to find the shortest path from a starting node to all other nodes in a weighted directed graph.

### Dijkstra's Algorithm Implementation in JavaScript

```javascript
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(key, value) {
        this.heap.push({ key, value });
        this.bubbleUp();
    }

    extractMin() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex].value <= this.heap[index].value) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        const length = this.heap.length;
        const element = this.heap[index];

        while (true) {
            const leftChildIdx = 2 * index + 1;
            const rightChildIdx = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                if (leftChild.value < element.value) swap = leftChildIdx;
            }

            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (swap === null && rightChild.value < element.value) ||
                    (swap !== null && rightChild.value < leftChild.value)
                ) swap = rightChildIdx;
            }

            if (swap === null) break;
            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
            index = swap;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

function dijkstra(graph, startNode) {
    const distances = {};
    const minHeap = new MinHeap();

    // Initialize distances with Infinity, except the startNode which is 0
    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[startNode] = 0;

    minHeap.insert(startNode, 0);

    while (!minHeap.isEmpty()) {
        const { key: currentNode, value: currentDistance } = minHeap.extractMin();

        if (currentDistance > distances[currentNode]) continue;

        for (let neighbor in graph[currentNode]) {
            const distance = graph[currentNode][neighbor];
            const newDist = currentDistance + distance;

            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                minHeap.insert(neighbor, newDist);
            }
        }
    }

    return distances;
}

// Example graph represented as an adjacency list with edge weights
const graph = {
    A: { B: 4, C: 2 },
    B: { A: 4, C: 5, D: 10 },
    C: { A: 2, B: 5, D: 3 },
    D: { B: 10, C: 3, E: 6 },
    E: { D: 6 }
};

const startNode = 'A';
const shortestPaths = dijkstra(graph, startNode);
console.log("Shortest paths from node", startNode, ":", shortestPaths);
```

### Explanation:

1. **MinHeap Class**:

   - A helper class implementing a min-heap (priority queue) to efficiently retrieve the node with the smallest distance.
2. **dijkstra Function**:

   - Takes a graph and a `startNode` as input.
   - Uses Dijkstra's algorithm to find the shortest path from the `startNode` to all other nodes in the graph.
   - Returns an object `distances` where each key is a node and the corresponding value is the shortest distance from the `startNode` to that node.
3. **Graph Representation**:

   - The graph is represented as an adjacency list where each node points to its neighboring nodes along with the weights of the edges.
4. **Algorithm Steps**:

   - **Step 1**: Initialize distances with `Infinity` for all nodes except the `startNode`, which is initialized to `0`.
   - **Step 2**: Insert the `startNode` into the min-heap with a distance of `0`.
   - **Step 3**: Extract the node with the smallest distance from the heap, and update the distances of its neighbors if a shorter path is found.
   - **Step 4**: Continue until all nodes have been processed.
5. **Example Graph**:

   - The example graph has 5 nodes (`A`, `B`, `C`, `D`, `E`) and various weighted edges between them.
6. **Output**:

   - The output `shortestPaths` contains the shortest distance from the `startNode` (`A`) to every other node.

### Example Output:

If you run the provided example, the output will be something like:

```javascript
Shortest paths from node A : { A: 0, B: 4, C: 2, D: 5, E: 11 }
```

This output shows the shortest distances from node `A` to all other nodes in the graph.

### Summary:

- The implementation uses a priority queue (min-heap) to efficiently manage the exploration of nodes, ensuring that the smallest distance is always expanded first.
- Dijkstra's algorithm efficiently computes the shortest paths from a given start node to all other nodes in a weighted directed graph.
