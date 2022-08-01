function getSequence(arr) {
  debugger
  const p = arr.slice()
  const result = [0]
  let i, j, u, v, c
  const len = arr.length
  for (i = 0; i < len; i++) {
    const arrI = arr[i]
    if (arrI !== 0) {
      j = result[result.length - 1]
      if (arr[j] < arrI) {
        p[i] = j
        result.push(i)
        continue
      }
      u = 0
      v = result.length - 1
      while (u < v) {
        c = (u + v) >> 1
        if (arr[result[c]] < arrI) {
          u = c + 1
        } else {
          v = c
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1]
        }
        result[u] = i
      }
    }
  }
  u = result.length
  v = result[u - 1]
  while (u-- > 0) {
    result[u] = v
    v = p[v]
  }
  return result
}

// 先查找最长的个数 看哪个连续的潜力最大
const arr = [2, 5, 8, 7, 3, 4, 5, 1, 6]
// [2]
// [2, 5]
// [2, 5, 8]
// [2, 5, 8]  7=> [2, 5, 7] 二分查找比7大的第一个数
// [2, 5, 7]  3=> [2, 3, 7]
const ret = getSequence(arr)
console.log('ret >>> ', ret)
