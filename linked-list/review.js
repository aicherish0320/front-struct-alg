/**
  双指针遍历链表
 */
const a = { val: 'a' }
const b = { val: 'b' }
const c = { val: 'c' }
const d = { val: 'd' }

a.next = b
b.next = c
c.next = d

const fn = (head) => {
  let p1 = head
  let p2 = head.next

  while (p1 && p2) {
    console.log(p1.val, p2.val)
    p1 = p2
    p2 = p2.next
  }
}

fn(a)
