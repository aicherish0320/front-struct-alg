const lengthOfLongSubstring = (s) => {
  if (!s.length) return 0
  let ret = 1
  let last = 0
  let obj = { [s[0]]: true }
  for (let i = 1, j = 0; i < s.length; i++) {
    if (s[i] !== s[j] && !obj[s[i]]) {
      ret++
      obj[s[i]] = true
    } else {
      last = Math.max(ret, last)
      ret = 1
      j++
      i = j
      obj = { [s[i]]: true }
    }
  }
  return Math.max(ret, last)
}

console.log(lengthOfLongSubstring('abcabcbb'))
console.log(lengthOfLongSubstring('pwwkew'))
console.log(lengthOfLongSubstring('dvdf'))
console.log(lengthOfLongSubstring('bbbbbbb'))
