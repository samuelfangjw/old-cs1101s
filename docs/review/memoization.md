---
id: memoization
title: "Memoization"
---

## Motivation
Recall the fibonacci function.

```
function fib(n) { 
    return n <= 1 ?
        n : fib(n - 1) + fib(n - 2);
}
```

This function has exponential time complexity (O(2ⁿ)) as we have to caculate many duplicate values. We can make this function more efficient if we store values which we have calculated earlier so we do not have to calculate them again!

## Memoization

We can use an array to store memoized values.

```
function mfib(n) {
    // array mem serves as memory for already computed results of fib
    const mem = [];
    
    function fib(k) {
        // test if fib(k) has been computed already
        if (mem[k] !== undefined) {
            return mem[k]; // just access memory
        } else { // compute fib and add result to mem
            const result = 
                (k <= 1) ? k : fib(k - 1) + fib(k - 2);
            mem[k] = result;
            return result;
        }
    }
    return fib(n);
}
```

* Time Complexity is now O(n)

A 2D array can also be used if there are two parameters to memoize

```
// Naive version of n choose k
function choose(n, k) {
    return (k > n) ?
        0 : (k === 0 || k === n) ?
            1 : choose(n - 1, k) +
                choose(n - 1, k - 1);
}
```

```
// Memoised version of n choose k
const mem = [];

function read(n, k) {
    return (mem[n] === undefined) ?
        undefined : mem[n][k];
}

function write(n, k, value) {
    if (mem[n] === undefined) {
        mem[n] = [];
    } else {}
    mem[n][k] = value;
}


function mchoose(n, k) {
    if (read(n, k) !== undefined) {
        return read(n, k);
    } else {
        const result = (k > n) ?
            0 : (k === 0 || k === n) ?
                1 : mchoose(n - 1, k) +
                    mchoose(n - 1, k - 1);
        write(n, k, result);
        return result;
    }
}
```

Time Complexity: O(nk)
Space Complexity: O(nk)

### When to memoize a function?
Memoization involves a tradeoff between time and space. One has to consider whether the speedup in time is worth the extra space required to store the memoized results.