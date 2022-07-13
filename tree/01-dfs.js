const data = require('./data')

const dfs = (root) => {
  if (!root) return
  console.log(root.val)
  root.children.forEach((child) => dfs(child))
}

dfs(data)
