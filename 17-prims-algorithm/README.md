# Algorithms - Prim's algorithm


Sure! Below is an implementation of Prim's algorithm in JavaScript. Prim's algorithm is used to find the minimum spanning tree (MST) of a graph. The graph can be represented using an adjacency list, where each node has a list of its neighboring nodes and the edge weights connecting them.

### Prim's Algorithm Implementation in JavaScript

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

function primsAlgorithm(graph) {
    const n = graph.length;
    const minHeap = new MinHeap();
    const inMST = Array(n).fill(false);
    const minEdgeWeight = Array(n).fill(Infinity);
    const parent = Array(n).fill(-1);
  
    minEdgeWeight[0] = 0;
    minHeap.insert(0, 0);

    while (!minHeap.isEmpty()) {
        const { key: u } = minHeap.extractMin();
        inMST[u] = true;

        for (let [v, weight] of graph[u]) {
            if (!inMST[v] && weight < minEdgeWeight[v]) {
                minEdgeWeight[v] = weight;
                parent[v] = u;
                minHeap.insert(v, weight);
            }
        }
    }

    const mst = [];
    for (let i = 1; i < n; i++) {
        mst.push([parent[i], i, minEdgeWeight[i]]);
    }
    return mst;
}

// Example graph represented as an adjacency list
const graph = [
    [[1, 2], [3, 6]],   // Node 0 is connected to Node 1 with weight 2 and Node 3 with weight 6
    [[0, 2], [2, 3], [3, 8], [4, 5]], // Node 1 is connected to Node 0, Node 2, Node 3, and Node 4
    [[1, 3], [4, 7]],  // Node 2 is connected to Node 1 and Node 4
    [[0, 6], [1, 8], [4, 9]], // Node 3 is connected to Node 0, Node 1, and Node 4
    [[1, 5], [2, 7], [3, 9]]  // Node 4 is connected to Node 1, Node 2, and Node 3
];

const mst = primsAlgorithm(graph);
console.log("Minimum Spanning Tree: ", mst);
```

### Explanation:

1. **MinHeap Class**:

   - A helper class implementing a min-heap (priority queue) to efficiently retrieve the minimum edge weight.
2. **primsAlgorithm Function**:

   - Takes a graph represented as an adjacency list.
   - Uses Prim's algorithm to find the MST of the graph.
   - The MST is represented as a list of edges `[u, v, weight]`, where `u` and `v` are nodes connected by an edge of a certain weight.
3. **Graph Representation**:

   - The graph is an adjacency list where each node points to its neighbors and the weight of the edge connecting them.
4. **Algorithm Steps**:

   - Start from an arbitrary node (node 0 in this case).
   - Use a min-heap to pick the minimum edge connected to the current MST.
   - Add the selected edge to the MST.
   - Continue until all nodes are included in the MST.
5. **Example**:

   - The provided graph has 5 nodes, and the function computes the MST based on edge weights.

### Example Output:

If you run the provided example, the output will be something like:

```javascript
Minimum Spanning Tree:  [
  [ 0, 1, 2 ],
  [ 1, 2, 3 ],
  [ 1, 4, 5 ],
  [ 0, 3, 6 ]
]
```

This output shows the edges in the minimum spanning tree with their corresponding weights.
