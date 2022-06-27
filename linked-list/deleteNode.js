/*
  删除链表中的节点
  请编写一个函数，用于删除单链表中某个特定节点。在设计函数时需要注意，你无法访问链表的头节点 head
  ，只能直接访问要被删除的节点
*/
const a = { val: 'a' }
const b = { val: 'b' }
const c = { val: 'c' }
const d = { val: 'd' }

a.next = b
b.next = c
c.next = d

const deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
}

deleteNode(b)

console.log('a >>> ', a)
