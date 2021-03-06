/**
 * 有效的括号(20)
 * @param {string} brackets
 */
const validBrackets = (brackets) => {
  const stack = []
  const left = ['[', '{', '(']

  if (stack.length % 2 !== 0) {
    return false
  }

  for (let i = 0; i < brackets.length; i++) {
    const val = brackets[i]
    if (left.indexOf(val) > -1) {
      stack.push(val)
    } else {
      const lastVal = stack[stack.length - 1]
      if (
        (val === ']' && lastVal === '[') ||
        (val === '}' && lastVal === '{') ||
        (val === ')' && lastVal === '(')
      ) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return stack.length === 0
}

// For Test
const brackets = '{[]}'
console.log(validBrackets(brackets))

/**
解题思路
  1. 对于没有闭合的左括号而言，越靠后的左括号，对应的右括号越靠前
  2. 满足后进先出，考虑用栈
 */
