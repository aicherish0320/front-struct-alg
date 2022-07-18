const { binaryTree } = require('./data')

const postOrder = (root) => {
  if (!root) return
  const stack = [root]
  const outputStack = []

  while (stack.length) {
    const n = stack.pop()
    outputStack.push(n)
    n.left && stack.push(n.left)
    n.right && stack.push(n.right)
  }
  while (outputStack.length) {
    const n = outputStack.pop()
    console.log(n.val)
  }
}

postOrder(binaryTree)
