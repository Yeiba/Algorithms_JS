/**
 * @param {number} n
 * @return {number} 
 */

const recursiveFibonacci = (n) => {
    // start the funnction with Base case of recursion
    if (n < 2) {
        console.log(`"number is less then 2 "${n}`)
        return n
    }
    console.log(`"number is "${n}`)
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log(recursiveFibonacci(0)) // 0
console.log(recursiveFibonacci(1)) // 1
console.log(recursiveFibonacci(4)) // 1
console.log(recursiveFibonacci(6)) // 8
