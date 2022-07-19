const { binaryTree } = require('./data')

const preOrder = (root) => {
  if (!root) return

  const stack = [root]
  while (stack.length) {
    const n = stack.pop()
    console.log(n.val)
    n.right && stack.push(n.right)
    n.left && stack.push(n.left)
  }
}

preOrder(binaryTree)
