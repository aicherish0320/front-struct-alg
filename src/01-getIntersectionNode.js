/*
  给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。
*/
const getIntersectionNode = function (headA, headB) {
  const visited = new Set()
  let temp = headA
  while (temp !== null) {
    visited.add(temp)
    temp = temp.next
  }
  temp = headB
  while (temp !== null) {
    if (visited.has(temp)) {
      return temp
    }
    temp = temp.next
  }
  return null
}

const getIntersectionNode2 = function (headA, headB) {
  let lastHeadA = null
  let lastHeadB = null
  let originHeadA = headA
  let originHeadB = headB
  if (!headA || !headB) {
    return null
  }
  while (true) {
    if (headB == headA) {
      return headB
    }
    if (headA && headA.next == null) {
      lastHeadA = headA
      headA = originHeadB
    } else {
      headA = headA.next
    }
    if (headB && headB.next == null) {
      lastHeadB = headB
      headB = originHeadA
    } else {
      headB = headB.next
    }
    if (lastHeadA && lastHeadB && lastHeadA != lastHeadB) {
      return null
    }
  }
  return null
}
