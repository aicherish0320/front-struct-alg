const root = {
  val: 1,
  left: {
    val: 2
  },
  right: {
    val: 3
  }
}

const hasPathSum = function (root, targetSum) {
  if (!root) return false
  let ret = false
  const rec = (root, s) => {
    console.log(root.val, s)
    if (!root.left && !root.right && targetSum === s) {
      ret = true
    }
    if (root.left) {
      rec(root.left, s + root.left.val)
    }
    if (root.right) {
      rec(root.right, s + root.right.val)
    }
  }
  rec(root, root.val)

  return ret
}

console.log(hasPathSum(root, 13))
