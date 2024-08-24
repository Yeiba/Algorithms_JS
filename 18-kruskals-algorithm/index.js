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
