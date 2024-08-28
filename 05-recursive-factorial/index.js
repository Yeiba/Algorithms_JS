/**
 * @param {number} n
 * @return {number} 
 */

const recursiveFactorial = (n) => {
    // start the funnction with Base case of recursion
    if (n === 0) {
        return 1
    }
    return n * recursiveFactorial(n - 1)
}

console.log(recursiveFactorial(0)) // 1
console.log(recursiveFactorial(1)) // 1
console.log(recursiveFactorial(5)) // 120
