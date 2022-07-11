const isValid = (s) => {
  if (s.length % 2 !== 0) return false
  const stack = []
  const map = new Map()
  map.set('(', ')')
  map.set('[', ']')
  map.set('{', '}')

  for (let i = 0; i < s.length; i++) {
    const v = s[i]
    if (map.has(v)) {
      stack.push(v)
    } else {
      const c = stack[stack.length - 1]
      if (map.get(c) === v) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}

console.log(' >>> ', isValid('[]{}'))
console.log(' >>> ', isValid('([)]'))
