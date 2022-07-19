const { binaryTree } = require('./data')

const minDepth = function (root) {
  if (!root) return 0
  const q = [[root, 1]]
  while (q.length) {
    const [n, l] = q.shift()
    if (!n.left && !n.right) {
      console.log('l >>> ', l)
      return
    }
    n.left && q.push([n.left, l + 1])
    n.right && q.push([n.right, l + 1])
  }
}

minDepth(binaryTree)
