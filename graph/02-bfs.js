const graph = require('./data')

const visited = new Set()
visited.add(2)
const bfs = (n) => {
  const q = [n]
  while (q.length) {
    const current = q.shift()
    console.log(current)
    graph[current].forEach((item) => {
      if (!visited.has(item)) {
        q.push(item)
        visited.add(item)
      }
    })
  }
}

bfs(2)
