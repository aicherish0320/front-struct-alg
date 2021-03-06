const isPalindrome = function (head) {
  // 反转 slower 链表
  let right = reverse(findCenter(head))
  let left = head
  // 开始比较
  while (right != null) {
    if (left.val !== right.val) {
      return false
    }
    left = left.next
    right = right.next
  }
  return true
}
function findCenter(head) {
  let slower = head,
    faster = head
  while (faster && faster.next != null) {
    slower = slower.next
    faster = faster.next.next
  }
  // 如果 faster 不等于 null，说明是奇数个，slower 再移动一格
  if (faster != null) {
    slower = slower.next
  }
  return slower
}
function reverse(head) {
  let prev = null,
    cur = head,
    nxt = head
  while (cur != null) {
    nxt = cur.next
    cur.next = prev
    prev = cur
    cur = nxt
  }
  return prev
}
