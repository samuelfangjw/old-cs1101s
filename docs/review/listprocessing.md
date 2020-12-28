---
id: listprocessing
title: 'List Processing'
---

Source comes with a handy [LISTS](https://source-academy.github.io/source/LISTS/index.html) library that contains many useful functions for list processing. We shall discuss 4 commonly used functions here:

1. Map
2. Filter
3. Accummulate
4. Member

### Map
Map: `(f, xs) -> list`

Map takes as arguments a unary function (one parameter) and a list and returns a new list with function applied to each element of the list.

```
const xs = list(1, 2, 3);
const ys = map(x => math_pow(2, x), xs);
display_list(ys); // list(2, 4, 6);
```

:::tip
You can create a copy of a list using `map(x => x, xs)`, as long as the list elements are of primitive type.
:::

### Filter
Filter: `(pred, xs) -> list`

Filter takes as arguments a unary function that returns a boolean value (I call this a "predicate"!) and a list. It returns a new list containing all the elements that "passes"/returns true when tested with the "predicate".

```
const xs = list(1,2,3,4);
const ys = filter(x => x % 2 === 0, xs);
display_list(ys); // list(2,4)
```

:::important
`x => x % 2 ===0` is frequently used to test for even numbers.
:::

### Accummulate 
Accumulate: `(f, initial, xs) -> value`

Accumulate takes as arguments a binary function (2 parameters), an initial value and a list. It "combines" all the values together and returns a single value.

#### Intuition
From operations are done from the rightmost element to the leftmost element in the list.

First, we apply `f` to the rightmost element and the initial value to get an accumulated result. We then apply the function again with the next element (right to left!) and the accumulated result. Repeat until all elements are used.

```
const f = (x, y) => x + y;

accumulate(f, 0, list(1,2,3));
(1 + (2  + (3 + 0)); // initial is 0
(1 + (2 + 3));
(1 + 5);
6;
```

:::tip
Always ensure that parameter `f` is a **binary function**.

`const f = (x, y) => VALUE;`

In general (though there are exceptions), `initial`, `VALUE` and `y`, the second parameter of the binary function, should be of the same type. `x` is usually of the same type as well. 
:::

### Member
Member: `(v, xs) -> list`

Member takes as argument a value and a list. If the value cannot be found in the list, it will return null. If the value is in the list, it will return a sublist whose head is the value.

```
const xs = list(1,2,3,4);
const ys = member(3, xs);
display_list(ys); // list(3, 4)

const zs = member(5, xs);
display_list(zs); // null
```

:::important
Member can be used to test whether an element is in the list. If member returns null, the element is not in the list.
:::