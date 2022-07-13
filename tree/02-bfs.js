const data = require('./data')

const bfs = (root) => {
  if (!root) return
  const queue = []
  queue.push(root)
  while (queue.length) {
    const node = queue.shift()
    console.log(node.val)
    node.children.forEach((child) => queue.push(child))
  }
}

console.log(bfs(data))
