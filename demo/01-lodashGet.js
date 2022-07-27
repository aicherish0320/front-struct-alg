const get = (obj, path) => {
  const arr = path.split('.')
  return arr.reduce((cur, acc) => {
    return cur[acc]
  }, obj)
}

const obj = {
  a: {
    b: {
      c: 1
    }
  }
}

console.log(get(obj, 'a.b.c'))
