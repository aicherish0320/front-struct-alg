const { binaryTree } = require('./data')

const preOrder = (root) => {
  const stack = [root]

  while (stack.length) {
    const node = stack.pop()
    console.log(node.val)
    node.right && stack.push(node.right)
    node.left && stack.push(node.left)
  }
}

preOrder(binaryTree)
