# Algorithms - Kruskal's Algorithm


Below is an implementation of Kruskal's algorithm in JavaScript. Kruskal's algorithm is used to find the minimum spanning tree (MST) of a connected, weighted graph. The algorithm sorts all the edges in non-decreasing order of their weight and then picks the smallest edge, provided it doesn't form a cycle with the already included edges in the MST.

### Kruskal's Algorithm Implementation in JavaScript

```javascript
class UnionFind {
    constructor(n) {
        this.parent = Array(n).fill().map((_, index) => index);
        this.rank = Array(n).fill(0);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX]++;
            }
        }
    }
}

function kruskalAlgorithm(edges, n) {
    const mst = [];
    const unionFind = new UnionFind(n);

    // Sort edges based on their weight
    edges.sort((a, b) => a[2] - b[2]);

    for (let [u, v, weight] of edges) {
        if (unionFind.find(u) !== unionFind.find(v)) {
            mst.push([u, v, weight]);
            unionFind.union(u, v);
        }
    }

    return mst;
}

// Example graph represented as a list of edges [u, v, weight]
const edges = [
    [0, 1, 4],
    [0, 7, 8],
    [1, 2, 8],
    [1, 7, 11],
    [2, 3, 7],
    [2, 8, 2],
    [2, 5, 4],
    [3, 4, 9],
    [3, 5, 14],
    [4, 5, 10],
    [5, 6, 2],
    [6, 7, 1],
    [6, 8, 6],
    [7, 8, 7]
];

const n = 9; // Number of vertices in the graph
const mst = kruskalAlgorithm(edges, n);
console.log("Minimum Spanning Tree: ", mst);
```

### Explanation:

1. **Union-Find (Disjoint Set) Data Structure**:

   - The `UnionFind` class is used to keep track of the connected components and helps to detect cycles.
   - **`find(x)`**: Determines the root of `x` with path compression for efficiency.
   - **`union(x, y)`**: Merges the sets containing `x` and `y`. It uses union by rank to keep the tree flat.
2. **Kruskal's Algorithm**:

   - **Input**: List of edges, where each edge is represented as `[u, v, weight]` and `n`, the number of vertices.
   - **Step 1**: Sort all edges in non-decreasing order of their weight.
   - **Step 2**: Initialize an empty list `mst` to store the edges of the minimum spanning tree.
   - **Step 3**: Iterate through the sorted edges:
     - For each edge `[u, v, weight]`, check if `u` and `v` are in the same component using the `find` method.
     - If not, add the edge to the `mst` and merge the components using `union`.
   - **Step 4**: The algorithm continues until `n-1` edges are added to the MST.
3. **Example Graph**:

   - The example graph is represented as a list of edges with weights.
   - The graph has 9 vertices (indexed from 0 to 8).
4. **Output**:

   - The output `mst` contains the edges of the minimum spanning tree and their corresponding weights.

### Example Output:

If you run the provided example, the output will be something like:

```javascript
Minimum Spanning Tree:  [
  [ 6, 7, 1 ],
  [ 5, 6, 2 ],
  [ 2, 8, 2 ],
  [ 0, 1, 4 ],
  [ 2, 5, 4 ],
  [ 2, 3, 7 ],
  [ 0, 7, 8 ],
  [ 3, 4, 9 ]
]
```

This output represents the edges in the minimum spanning tree along with their weights. The edges connect all the vertices in the graph with the minimum possible total weight.
