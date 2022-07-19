const { binaryTree } = require('./data')

const inOrder = (root) => {
  if (!root) return
  const stack = []
  let p = root

  while (stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    const n = stack.pop()
    console.log(n.val)
    p = n.right
  }
}

inOrder(binaryTree)
