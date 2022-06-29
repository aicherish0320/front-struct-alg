/*
  两数相加 （2）
  给你两个非空的链表，表示两个非负的整数。它们每个数组都是按照逆序的方式存储的，并且每个节点只能存储一位数字。
  请将两个数相加，并以相同形式返回一个表示和的链表
*/

function ListNode(val = '') {
  this.val
}

const addTwoNumbers = function (l1, l2) {
  const ret = new ListNode(0)

  let p1 = l1
  let p2 = l2
  let p3 = ret

  let carry = 0

  while (p1 || p2) {
    let v1 = p1 ? p1.val : 0
    let v2 = p2 ? p2.val : 0
    let v = v1 + v2 + carry
    carry = Math.floor(v / 10)
    p3.next = new ListNode(v % 10)

    p1 = p1 && p1.next
    p2 = p2 && p2.next
    p3 = p3.next
  }

  if (carry) {
    p3.next = new ListNode(carry)
  }

  return ret.next
}
