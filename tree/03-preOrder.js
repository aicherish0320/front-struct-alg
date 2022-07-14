const { binaryTree } = require('./data')

const preOrder = (root) => {
  if (!root) return
  console.log(root.val)
  preOrder(root.left)
  preOrder(root.right)
}

console.log(preOrder(binaryTree))
