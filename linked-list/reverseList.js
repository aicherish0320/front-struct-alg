/*
  给你单链表的头节点 head，请你反转链表，并返回反转后的链表。
*/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const head = {
  val: 'a',
  next: { val: 'b', next: { val: 'c', next: { val: 'd', next: null } } }
}

const reverseList = function (head) {
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

console.log(reverseList(head))
