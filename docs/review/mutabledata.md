---
id: mutabledata
title: 'Mutable Data'
---

## Variables
We can declare variable using the `let` keyword. The values of a variable can be changed after declaration.

```
let x = 1;
x; // Evaluates to 1
x = 2;
x; // Evaluates to 2
```

:::note
From Source 3 onwards, function parameters (including parameters of lambda expressions) are variables.

```
function f(x) {
    x = x + 1;
    return x;
}

f(1); // Evaluates to 2
```
:::

## Mutable Pairs
The values of the head and tail of a pair can be modified using `set_head` and `set_tail`.

```
let p = pair(1, 2);
set_head(p, 3); // p is now pair(3, 2)
set_tail(p, 3); // p is now pair(3, 4)
```

## Mutable Lists

We can set the tail (or head) of a list to refer to a different list.

```
const xs = list(1, 2);
const ys = list (3);
```
![](./s9media/2.png)

```
set_tail(xs, ys);
display_list(xs); // list(1, 3);
display_list(ys); // list(3);
```
![](./s9media/1.png)

:::important
What is the difference between `const xs` and `let xs`, assuming xs is a list?

In both cases, the list still can be mutated. However, for `const xs`, we cannot change the list it is referring to whereas for for `let xs` we can.

```
const xs = list(1, 2, 3);
let ys =list(1, 2, 3);
let zs = list(4, 5, 6);

xs = zs; // ERROR
ys = zs; // ok!
```
:::