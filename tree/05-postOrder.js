const { binaryTree } = require('./data')

const postOrder = (root) => {
  if (!root) return
  postOrder(root.left)
  postOrder(root.right)
  console.log(root.val)
}

console.log(postOrder(binaryTree))
