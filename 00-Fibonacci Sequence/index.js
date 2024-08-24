/**
 * @param {number} n
 * @return {number[]}
 */

const fibonacci = (n) => {
    const fib = [0, 1]
    // populate the remaining elements
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}

console.log(fibonacci(7)); //[0,1,1,2,3,5,8]