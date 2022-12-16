---
title: efficiency
tag: [sicp, python]
---

- [Efficiency](http://composingprograms.com/pages/28-efficiency.html#measuring-efficiency)
  - Time
  - Space

## tree recursive function

```py
def fib(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    return fib(n-2) + fib(n-1)
```

## Memorization

> Tree-recursive computational processes can often be made more efficient through memoization, a powerful technique for increasing the efficiency of recursive functions that repeat computation. A memoized function will store the return value for any arguments it has previously received. A second call to fib(25) would not re-compute the return value recursively, but instead return the existing one that has already been constructed.
