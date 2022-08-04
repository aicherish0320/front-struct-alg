const binary = {
  val: 'a',
  left: {
    val: 'b',
    left: {
      val: 'd'
    },
    right: {
      val: 'e'
    }
  },
  right: {
    val: 'c',
    left: {
      val: 'f'
    },
    right: {
      val: 'g'
    }
  }
}

const bfs = (root) => {
  const queue = [root]
  while (queue.length) {
    const n = queue.shift()
    console.log(n.val)
    n.left && queue.push(n.left)
    n.right && queue.push(n.right)
  }
}

const dfs = (root) => {
  console.log(root.val)
  root.left && dfs(root.left)
  root.right && dfs(root.right)
}
// bfs(binary)
dfs(binary)
