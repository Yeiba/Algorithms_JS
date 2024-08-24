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
