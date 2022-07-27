const graph = require('./data')

const visited = new Set()
const dfs = (n) => {
  console.log(n)
  visited.add(n)
  graph[n].forEach((item) => {
    if (!visited.has(item)) {
      dfs(item)
    }
  })
}

dfs(2)
