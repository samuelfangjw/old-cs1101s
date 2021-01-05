---
id: treeprocessing
title: 'Tree Processing'
---

## Trees
A tree of a certain type is a list whose elements are of that type or trees of that type.

Since trees are defined recursively, recursion is usually a good method to solve problems involving trees. For most questions, the following idea applies.

1. Map over the list. 
2. If the element is a data item, do necessary operations.
3. Else it must be a tree, so we call the function again recursively on the tree.

```
function map_tree(f, tree) {
    function helper(sub_tree) {
        return !is_list(sub_tree)
            ? f(sub_tree)
            : map_tree(f, sub_tree);

    }
    
    return map(helper, tree);
}
```