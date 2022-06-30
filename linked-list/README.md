# 链表

- 多个元素组成的列表
- 元素存储不连续，用 next 指针连在一起

## 数组 vs 链表

- 数组：增删非首尾元素时往往需要移动元素
- 链表：增删非首尾元素，不需要移动元素，只需要更改 next 的指向即可

## JS 中的链表

- JavaScript 中没有链表
- 可以用 Object 模拟链表

## 原型链

- 原型链的本质是链表
- 原型链上的节点是各种原型对象，比如`Function.prototype`、`Object.prototype`
- 原型链通过 `__proto__` 属性连接各种原型对象

> 如果 A 沿着原型链能找到 B.prototype，那么 A instanceof B 为 true
