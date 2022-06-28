/**
  删除节点
 */
const a = { val: 'a' }
const b = { val: 'b' }
const c = { val: 'c' }
const d = { val: 'd' }

a.next = b
b.next = c
c.next = d

const deleteNode = (node) => {
  node.val = node.next.val
  node.next = node.next.next
}

deleteNode(b)
