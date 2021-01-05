---
id: identityvsequality
title: 'Identity vs Equality'
---

## Primitive values
Two primitive values such as Number, Boolean and Strings, are equal and identical if they have the same value. To check for equality, we use the `equal` function which takes as arguments two values and checks whether they are equal. To check for identity, we use the `===` operator.

```
// Some examples
equal(false, true); // false
equal(1, 1); // true
equal(1, "1"); // false
true === true; // true
1 === 1; // true
"hello" === "hello"; // true
```

## Compound Structures
Compound Structures, such as Pairs, Lists, Arrays and Functions have identity. This means that two different instances of the compound structure can have the same value, but may not be identical. 

As an anology, suppose we have two identical twins. In computer science terminology, there are *equal* as they have the same DNA makeup. However, they are *not identical* as they are still different instances of the same human (compound structure). If we make changes to one of the twins, the other will not change.

### Equality
Two Compound Structures are equal if they have the same values and structure. 

```
equal(list(1,2,3), list(1,2,3)); // true
equal(x => x, x => x); // false
equal([1,2,3], [1,2,3]); // false
```

:::important
`equal` function only works for lists and trees, but the examples above are all structurally equal.
:::

### Identity
Compound structures have identity when they are created. 

```
let x = list(1,2,3);
let y = list(1,2,3);
let z = x;
x === x; // true
x === y; // false
x === z; // true
```
:::note
Functions and arrays are compound structures too!
:::

:::tip
A compound structure is created whenever you see the keywords `function`, `pair`, `list`, or the operator `=>`. These may be hidden within functions such as `map` or `filter`.
:::