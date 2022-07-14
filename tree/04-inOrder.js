const { binaryTree } = require('./data')

const inOrder = (root) => {
  if (!root) return
  inOrder(root.left)
  console.log(root.val)
  inOrder(root.right)
}

console.log(inOrder(binaryTree))
