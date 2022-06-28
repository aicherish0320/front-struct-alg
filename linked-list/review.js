/**
  反转链表
 */

const a = { val: 'a' }
const b = { val: 'b' }
const c = { val: 'c' }
const d = { val: 'd' }

a.next = b
b.next = c
c.next = d

// 迭代
const reverseList = (head) => {
  let p1 = head
  let p2 = null
  while (p1) {
    const temp = p1.next
    p1.next = p2
    p2 = p1
    p1 = temp
  }
  return p2
}

// const ret = reverseList(a)

// 递归
const reverseList2 = (head) => {
  if (!head || !head.next) {
    return head
  }

  const newHead = reverseList2(head.next)

  head.next.next = head
  head.next = null
  return newHead
}

const ret = reverseList2(a)
console.log('ret >>> ', ret)
