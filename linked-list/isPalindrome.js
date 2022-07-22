// 回文链表

const linked = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 2,
      next: {
        val: 1
      }
    }
  }
}

const isPalindrome = (head) => {
  let left = head
  function traverse(right) {
    if (right == null) return true
    let res = traverse(right.next)
    res = res && right.val === left.val
    left = left.next
    return res
  }
  return traverse(head)
}

console.log('isPalindrome(linked) >>> ', isPalindrome(linked))
