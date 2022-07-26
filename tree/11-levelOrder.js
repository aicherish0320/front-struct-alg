/*
  层序遍历
*/

const levelOrder = (root) => {
  if (!root) return []

  const ret = []
  const q = [root]

  while (q.length) {
    let len = q.length
    ret.push([])
    while (len--) {
      const n = q.shift()
      ret[ret.length - 1].push(n.val)
      n.left && q.push(n.left)
      n.right && q.push(n.right)
    }
  }

  return ret
}
