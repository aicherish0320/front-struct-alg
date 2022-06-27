const a = { val: 'a' }
const b = { val: 'b' }
const c = { val: 'c' }
const d = { val: 'd' }

a.next = b
b.next = c
c.next = d

// 遍历链表

const fn = (head) => {
  while (head) {
    console.log(head.val)
    head = head.next
  }
}

// fn(a)

// 插入
const e = { val: 'e' }

b.next = e
e.next = c

fn(a)
