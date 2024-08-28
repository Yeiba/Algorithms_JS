# Algorithms - recursive binary Search

What is Recursion? :
Recursion is a problem solving technique where the solution depends on solutions to smaller instances of the same problem

Recursion is when a function calls itself
Why is Recursion? :
A Great technique to simplify your solution

If you find yourself breaking down your problem into smaller versions of the same problem, recursion is very useful.


Problem : Give a sorted array of 'n' elements and target element 't', find the index of 't' in the array.
Return -1 if the target element is not found.

linearSearch([-5, 2, 4, 6, 10], 6) = 2
linearSearch([-5, 2, 4, 6, 10], 10) = 4
linearSearch([-5, 2, 4, 6, 10], 20) = -1
