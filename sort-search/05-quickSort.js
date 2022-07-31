const { arr } = require('./data')

const quickSort = (arr) => {
  const rec = (arr) => {
    if (arr.length === 1) return arr
    const mid = arr[0]
    const left = []
    const right = []
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > mid) {
        right.push(arr[i])
      } else {
        left.push(arr[i])
      }
    }

    return [...rec(left), mid, ...rec(right)]
  }
  const ret = rec(arr)
  console.log('ret >>> ', ret)
}

quickSort(arr)
