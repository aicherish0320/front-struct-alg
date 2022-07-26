const json = {
  a: { b: { c: 1 } },
  d: [1, 2]
}

const dfs = (root, path) => {
  console.log(root)
  Object.keys(root).forEach((key) => {
    dfs(root[key], path.concat(key))
  })
}

dfs(json, [])
