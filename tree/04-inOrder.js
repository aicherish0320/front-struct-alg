const { binaryTree } = require('./data')

const inOrder = (root) => {
  if (!root) return
  inOrder(root.left)
  console.log(root.val)
  inOrder(root.right)
}

console.log(inOrder(binaryTree))

/*
  ## 中序遍历算法口诀
  - 对根节点的左子树进行中序遍历
  - 访问根节点
  - 对根节点的右子树进行中序遍历
*/
